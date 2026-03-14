#!/usr/bin/env bash
set -e

echo "Stopping existing processes on ports 5173 and 3001..."
lsof -ti:5173 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3001 2>/dev/null | xargs kill -9 2>/dev/null || true

echo "Starting dev servers..."
npm run dev
