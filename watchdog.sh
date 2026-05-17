#!/bin/bash

# ============================================================
# WATCHDOG — Run in a separate terminal
#
# Monitors the harness pipeline, detects stuck processes,
# kills them, and restarts the orchestrator.
#
# Usage: ./watchdog.sh
# ============================================================

PROJECT_DIR="/Users/nikhil.tiwari/PersonalPortfolio"
STATE_FILE="$PROJECT_DIR/.harness/state.json"
STUCK_TIMEOUT=300  # 5 minutes without progress = stuck
CHECK_INTERVAL=30  # Check every 30 seconds

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

last_commit=""
last_commit_time=$(date +%s)

show_status() {
  clear
  echo -e "${BLUE}═══════════════════════════════════════${NC}"
  echo -e "${BLUE}  HARNESS WATCHDOG${NC}"
  echo -e "${BLUE}═══════════════════════════════════════${NC}"
  echo ""

  # State
  if [ -f "$STATE_FILE" ]; then
    python3 -c "
import json
d = json.load(open('$STATE_FILE'))
print(f\"  Sprint: {d.get('current_sprint', '?')} / Phase: {d.get('current_phase', '?')}\")
print(f\"  Planner: {'✓' if d.get('planner_done') else '○'}\")
for i in range(1, 7):
    s = d.get('sprints', {}).get(str(i), {})
    c = '✓' if s.get('contract_done') else '○'
    g = '✓' if s.get('generator_done') else '○'
    e = s.get('eval_result', '○')
    a = s.get('attempts', 0)
    if c != '○' or g != '○' or e != '○':
        print(f\"  Sprint {i}: contract[{c}] gen[{g}] eval[{e}] attempts:{a}\")
" 2>/dev/null
  else
    echo "  No state file yet"
  fi

  echo ""

  # Processes
  echo -e "  ${YELLOW}Processes:${NC}"
  KIRO_PID=$(ps aux | grep "kiro-cli.*PersonalPortfolio\|kiro-cli.*tmp-" | grep -v grep | head -1 | awk '{print $2}')
  NEXT_PID=$(ps aux | grep "next dev" | grep -v grep | head -1 | awk '{print $2}')
  ORCH_PID=$(ps aux | grep "orchestrator.sh" | grep -v grep | head -1 | awk '{print $2}')

  [ -n "$ORCH_PID" ] && echo -e "  ${GREEN}✓${NC} Orchestrator (PID $ORCH_PID)" || echo -e "  ${RED}✗${NC} Orchestrator not running"
  [ -n "$KIRO_PID" ] && echo -e "  ${GREEN}✓${NC} Kiro CLI (PID $KIRO_PID)" || echo -e "  ${YELLOW}○${NC} No Kiro session"
  [ -n "$NEXT_PID" ] && echo -e "  ${GREEN}✓${NC} Next dev (PID $NEXT_PID)" || echo -e "  ${YELLOW}○${NC} No dev server"

  echo ""

  # Last commit
  cd "$PROJECT_DIR" 2>/dev/null
  current_commit=$(git log --oneline -1 2>/dev/null)
  echo -e "  ${YELLOW}Last commit:${NC} $current_commit"

  # Time since last progress
  now=$(date +%s)
  elapsed=$((now - last_commit_time))
  echo -e "  ${YELLOW}Time since progress:${NC} ${elapsed}s"

  if [ $elapsed -gt $STUCK_TIMEOUT ]; then
    echo ""
    echo -e "  ${RED}⚠ POSSIBLY STUCK (>${STUCK_TIMEOUT}s without progress)${NC}"
  fi

  echo ""
  echo -e "${BLUE}═══════════════════════════════════════${NC}"
  echo ""
  echo "  Commands:"
  echo "    k  — Kill stuck next dev server"
  echo "    r  — Restart orchestrator"
  echo "    q  — Quit watchdog"
  echo ""
}

kill_server() {
  pkill -f "next dev" 2>/dev/null
  echo -e "${GREEN}Killed dev server${NC}"
}

restart_orchestrator() {
  pkill -f "orchestrator.sh" 2>/dev/null
  pkill -f "kiro-cli.*tmp-" 2>/dev/null
  pkill -f "next dev" 2>/dev/null
  sleep 2
  cd "$PROJECT_DIR" && ./orchestrator.sh &
  echo -e "${GREEN}Orchestrator restarted${NC}"
}

# Main loop
while true; do
  show_status

  # Check for new commits (progress)
  cd "$PROJECT_DIR" 2>/dev/null
  current_commit=$(git log --oneline -1 2>/dev/null)
  if [ "$current_commit" != "$last_commit" ]; then
    last_commit="$current_commit"
    last_commit_time=$(date +%s)
  fi

  # Auto-kill stuck server if timeout exceeded
  now=$(date +%s)
  elapsed=$((now - last_commit_time))
  if [ $elapsed -gt $STUCK_TIMEOUT ]; then
    NEXT_PID=$(ps aux | grep "next dev" | grep -v grep | head -1 | awk '{print $2}')
    if [ -n "$NEXT_PID" ]; then
      echo -e "${RED}Auto-killing stuck dev server${NC}"
      kill_server
      last_commit_time=$(date +%s)  # Reset timer
    fi
  fi

  # Read user input (non-blocking)
  read -t $CHECK_INTERVAL -n 1 key 2>/dev/null
  case "$key" in
    k) kill_server; sleep 2 ;;
    r) restart_orchestrator; sleep 3 ;;
    q) echo "Bye"; exit 0 ;;
  esac
done
