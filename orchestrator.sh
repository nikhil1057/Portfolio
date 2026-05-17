#!/bin/bash

# ============================================================
# PORTFOLIO HARNESS — Resumable 6-Sprint Orchestrator
#
# Usage:
#   ./orchestrator.sh              # Start from beginning or resume
#   ./orchestrator.sh --reset      # Reset state and start fresh
#   ./orchestrator.sh --status     # Show current progress
#
# State is tracked in .harness/state.json
# Can resume from any sprint/phase after interruption.
# ============================================================

PROJECT_DIR="/Users/nikhil.tiwari/PersonalPortfolio"
KIRO_CLI="/Users/nikhil.tiwari/.local/bin/kiro-cli"
PROMPTS_DIR="$PROJECT_DIR/prompts"
STATE_FILE="$PROJECT_DIR/.harness/state.json"
TOTAL_SPRINTS=6
MAX_RETRIES=3

BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'
log() { echo -e "${BLUE}[harness]${NC} $1"; }
success() { echo -e "${GREEN}[✓]${NC} $1"; }
fail() { echo -e "${RED}[✗]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }

# ============================================================
# STATE MANAGEMENT
# ============================================================
init_state() {
  mkdir -p "$PROJECT_DIR/.harness/sprint-contracts" "$PROJECT_DIR/.harness/eval-reports"
  if [ ! -f "$STATE_FILE" ]; then
    cat > "$STATE_FILE" << 'EOF'
{
  "current_sprint": 0,
  "current_phase": "planner",
  "planner_done": false,
  "sprints": {}
}
EOF
  fi
}

get_state() {
  python3 -c "import json; d=json.load(open('$STATE_FILE')); print(d.get('$1', ''))"
}

set_state() {
  python3 -c "
import json
d = json.load(open('$STATE_FILE'))
d['$1'] = $2
json.dump(d, open('$STATE_FILE', 'w'), indent=2)
"
}

set_sprint_state() {
  local sprint="$1"
  local key="$2"
  local value="$3"
  python3 -c "
import json
d = json.load(open('$STATE_FILE'))
if 'sprints' not in d: d['sprints'] = {}
if '$sprint' not in d['sprints']: d['sprints']['$sprint'] = {}
d['sprints']['$sprint']['$key'] = $value
json.dump(d, open('$STATE_FILE', 'w'), indent=2)
"
}

get_sprint_state() {
  python3 -c "
import json
d = json.load(open('$STATE_FILE'))
print(d.get('sprints', {}).get('$1', {}).get('$2', ''))
"
}

show_status() {
  echo ""
  log "═══════════════════════════════════════"
  log "PORTFOLIO HARNESS STATUS"
  log "═══════════════════════════════════════"
  python3 -c "
import json
d = json.load(open('$STATE_FILE'))
print(f\"  Planner: {'✓ done' if d.get('planner_done') else '○ pending'}\")
print(f\"  Current: Sprint {d.get('current_sprint', 0)} / Phase: {d.get('current_phase', 'planner')}\")
print()
for i in range(1, 7):
    s = d.get('sprints', {}).get(str(i), {})
    contract = '✓' if s.get('contract_done') else '○'
    gen = '✓' if s.get('generator_done') else '○'
    eval_status = s.get('eval_result', '○')
    attempts = s.get('attempts', 0)
    print(f\"  Sprint {i}: contract[{contract}] generator[{gen}] eval[{eval_status}] attempts:{attempts}\")
"
  echo ""
}

# ============================================================
# INVOKE KIRO — Fresh session per call
# ============================================================
invoke_kiro() {
  local prompt_file="$1"
  local description="$2"
  log "Spawning: $description"
  cd "$PROJECT_DIR"
  "$KIRO_CLI" chat --no-interactive --trust-all-tools \
    "Read the file at $prompt_file and execute ALL instructions in it. Do not ask questions. Do not skip steps. You have full permission to use all tools including Playwright MCP browser tools."
  # Don't exit on failure
  return 0
}

# ============================================================
# PHASES
# ============================================================
run_planner() {
  local done=$(get_state "planner_done")
  if [ "$done" = "True" ]; then
    log "Planner already done, skipping"
    return
  fi

  log "═══════════════════════════════════════"
  log "PHASE: PLANNER"
  log "═══════════════════════════════════════"

  invoke_kiro "$PROMPTS_DIR/planner.md" "Planner"

  if [ -f "$PROJECT_DIR/.harness/spec.md" ]; then
    set_state "planner_done" "True"
    set_state "current_phase" "\"contract\""
    set_state "current_sprint" "1"
    success "Planner complete"
  else
    fail "Planner did not produce spec.md"
    exit 1
  fi
}

run_contract() {
  local sprint=$1
  local done=$(get_sprint_state "$sprint" "contract_done")
  if [ "$done" = "True" ]; then
    log "Sprint $sprint contract already done, skipping"
    return
  fi

  log "Sprint $sprint — Generating contract..."
  local contract_prompt="$PROJECT_DIR/.harness/tmp-contract-$sprint.md"
  sed "s/SPRINT_NUMBER/$sprint/g" "$PROMPTS_DIR/contract.md" > "$contract_prompt"
  invoke_kiro "$contract_prompt" "Sprint $sprint Contract"
  rm -f "$contract_prompt"

  set_sprint_state "$sprint" "contract_done" "True"
  set_state "current_phase" "\"generator\""
}

run_generator() {
  local sprint=$1
  log "Sprint $sprint — Running Generator..."

  local gen_prompt="$PROJECT_DIR/.harness/tmp-gen-$sprint.md"
  sed "s/SPRINT_NUMBER/$sprint/g" "$PROMPTS_DIR/generator.md" > "$gen_prompt"
  invoke_kiro "$gen_prompt" "Generator Sprint $sprint"
  rm -f "$gen_prompt"

  set_sprint_state "$sprint" "generator_done" "True"
  set_state "current_phase" "\"evaluator\""
}

run_evaluator() {
  local sprint=$1
  log "Sprint $sprint — Running Evaluator..."

  # Kill any leftover dev server
  pkill -f "next dev" 2>/dev/null || true
  sleep 2

  local eval_prompt="$PROJECT_DIR/.harness/tmp-eval-$sprint.md"
  sed "s/SPRINT_NUMBER/$sprint/g" "$PROMPTS_DIR/evaluator.md" > "$eval_prompt"
  invoke_kiro "$eval_prompt" "Evaluator Sprint $sprint"
  rm -f "$eval_prompt"

  # Kill dev server after eval
  pkill -f "next dev" 2>/dev/null || true

  # Check result
  local eval_file="$PROJECT_DIR/.harness/eval-reports/sprint-${sprint}.md"
  if [ -f "$eval_file" ] && grep -qi "## Verdict: PASS" "$eval_file"; then
    set_sprint_state "$sprint" "eval_result" "\"PASS\""
    set_state "current_phase" "\"contract\""
    local next=$((sprint + 1))
    set_state "current_sprint" "$next"
    success "Sprint $sprint PASSED"
    return 0
  else
    local attempts=$(get_sprint_state "$sprint" "attempts")
    attempts=${attempts:-0}
    attempts=$((attempts + 1))
    set_sprint_state "$sprint" "attempts" "$attempts"
    set_sprint_state "$sprint" "eval_result" "\"FAIL\""
    set_sprint_state "$sprint" "generator_done" "False"
    set_state "current_phase" "\"generator\""
    warn "Sprint $sprint FAILED (attempt $attempts/$MAX_RETRIES)"
    if [ $attempts -ge $MAX_RETRIES ]; then
      warn "Max retries reached — moving to next sprint"
      set_state "current_phase" "\"contract\""
      local next=$((sprint + 1))
      set_state "current_sprint" "$next"
    fi
    return 1
  fi
}

# ============================================================
# MAIN LOOP
# ============================================================
run_sprint() {
  local sprint=$1

  log "═══════════════════════════════════════"
  log "SPRINT $sprint/$TOTAL_SPRINTS"
  log "═══════════════════════════════════════"

  # Create branch if not exists
  cd "$PROJECT_DIR"
  git checkout -b "sprint/$sprint" 2>/dev/null || git checkout "sprint/$sprint" 2>/dev/null || true

  # Contract
  run_contract "$sprint"

  # Generator ↔ Evaluator loop
  local attempts=$(get_sprint_state "$sprint" "attempts")
  attempts=${attempts:-0}

  while [ $attempts -lt $MAX_RETRIES ]; do
    local phase=$(get_state "current_phase")

    if [ "$phase" = "generator" ]; then
      run_generator "$sprint"
    fi

    run_evaluator "$sprint"
    local result=$(get_sprint_state "$sprint" "eval_result")

    if [ "$result" = "PASS" ]; then
      # Merge to main
      cd "$PROJECT_DIR"
      git checkout main 2>/dev/null || true
      git merge "sprint/$sprint" --no-ff -m "merge: sprint $sprint" 2>/dev/null || true
      return 0
    fi

    attempts=$(get_sprint_state "$sprint" "attempts")
    attempts=${attempts:-0}
  done
}

main() {
  # Handle args
  if [ "$1" = "--reset" ]; then
    rm -f "$STATE_FILE"
    log "State reset"
    init_state
    return
  fi

  if [ "$1" = "--status" ]; then
    init_state
    show_status
    return
  fi

  init_state

  log "═══════════════════════════════════════"
  log "PORTFOLIO HARNESS — RESUMABLE"
  log "═══════════════════════════════════════"
  show_status

  # Resume from current state
  local planner_done=$(get_state "planner_done")
  if [ "$planner_done" != "True" ]; then
    run_planner
  fi

  local current_sprint=$(get_state "current_sprint")
  current_sprint=${current_sprint:-1}

  for ((sprint=current_sprint; sprint<=TOTAL_SPRINTS; sprint++)); do
    set_state "current_sprint" "$sprint"
    run_sprint "$sprint"
  done

  log "═══════════════════════════════════════"
  log "ALL 6 SPRINTS COMPLETE"
  log "═══════════════════════════════════════"
  show_status
}

main "$@"
