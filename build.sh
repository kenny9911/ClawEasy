#!/usr/bin/env bash
set -e

echo "Cleaning node_modules..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
npm install

echo "Building client and server..."
npm run build

echo "Build complete."
