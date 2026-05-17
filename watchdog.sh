#!/bin/bash

# ============================================================
# WATCHDOG — Monitors harness, kills stuck dev servers.
# Never kills kiro sessions. Never restarts orchestrator.
#
# Usage: ./watchdog.sh (run in separate terminal)
# ============================================================

PROJECT_DIR="/Users/nikhil.tiwari/PersonalPortfolio"
STUCK_TIMEOUT=300  # 5 min without progress = stuck
CHECK_INTERVAL=30

last_commit=""
last_commit_time=$(date +%s)

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

  # If stuck and server is running: kill only the dev server
  if [ $elapsed -gt $STUCK_TIMEOUT ]; then
    NEXT_PID=$(ps aux | grep "next dev" | grep -v grep | head -1 | awk '{print $2}')
    if [ -n "$NEXT_PID" ]; then
      log "⚠ STUCK for ${elapsed}s — killing dev server (PID $NEXT_PID)"
      pkill -f "next dev" 2>/dev/null
      last_commit_time=$(date +%s)
    fi
  fi
done
