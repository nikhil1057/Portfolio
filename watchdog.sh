#!/bin/bash

# ============================================================
# WATCHDOG — Fully autonomous. No manual intervention.
#
# Monitors the orchestrator, detects stuck processes,
# kills them, and restarts automatically.
#
# Usage: ./watchdog.sh
# Run in a separate terminal alongside orchestrator.sh
# ============================================================

PROJECT_DIR="/Users/nikhil.tiwari/PersonalPortfolio"
STATE_FILE="$PROJECT_DIR/.harness/state.json"
STUCK_TIMEOUT=300  # 5 min without progress = stuck
CHECK_INTERVAL=30

last_commit=""
last_commit_time=$(date +%s)
restarts=0

log() { echo "[$(date +%H:%M:%S)] $1"; }

while true; do
  sleep $CHECK_INTERVAL

  # Check for new commits (progress)
  cd "$PROJECT_DIR" 2>/dev/null
  current_commit=$(git log --oneline -1 2>/dev/null)
  if [ "$current_commit" != "$last_commit" ]; then
    last_commit="$current_commit"
    last_commit_time=$(date +%s)
    log "✓ Progress: $current_commit"
  fi

  # Time since last progress
  now=$(date +%s)
  elapsed=$((now - last_commit_time))

  # Show status
  KIRO_PID=$(ps aux | grep "kiro-cli.*tmp-\|kiro-cli.*PersonalPortfolio" | grep -v grep | head -1 | awk '{print $2}')
  NEXT_PID=$(ps aux | grep "next dev" | grep -v grep | head -1 | awk '{print $2}')
  ORCH_PID=$(ps aux | grep "orchestrator.sh" | grep -v grep | head -1 | awk '{print $2}')

  log "Status: orch=${ORCH_PID:-dead} kiro=${KIRO_PID:-none} server=${NEXT_PID:-none} idle=${elapsed}s"

  # If stuck: kill server and give kiro time to recover
  if [ $elapsed -gt $STUCK_TIMEOUT ]; then
    log "⚠ STUCK for ${elapsed}s — killing dev server"
    pkill -f "next dev" 2>/dev/null
    # Wait 60 seconds for kiro to recover after server kill
    sleep 60

    # Check if kiro recovered
    new_commit=$(git log --oneline -1 2>/dev/null)
    if [ "$new_commit" = "$last_commit" ]; then
      # Still stuck — kill kiro too
      log "⚠ Still stuck after 60s — killing kiro session"
      pkill -f "kiro-cli.*tmp-" 2>/dev/null
      sleep 5
    fi

    last_commit_time=$(date +%s)
  fi

  # If orchestrator died, restart it
  ORCH_PID=$(ps aux | grep "orchestrator.sh" | grep -v grep | head -1 | awk '{print $2}')
  if [ -z "$ORCH_PID" ]; then
    restarts=$((restarts + 1))
    log "⟳ Orchestrator dead — restarting (restart #$restarts)"
    pkill -f "next dev" 2>/dev/null
    sleep 2
    cd "$PROJECT_DIR" && ./orchestrator.sh >> /tmp/orchestrator.log 2>&1 &
    last_commit_time=$(date +%s)
    sleep 10
  fi
done
