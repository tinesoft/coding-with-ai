#!/bin/bash

set -e
set -o pipefail

echo "⚙️ Fix permissions..."
sudo chown -R node:node node_modules

echo "⚙️ Installing bun..."
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

echo "⚙️ Installing NPM dependencies..."
if [ -f package-lock.json ]; then
  npm ci
elif [ -f bun.lockb ] || [ -f bun.lock ]; then
  bun install --frozen-lockfile
else
  npm install
fi

echo "🧹 Cleaning cache..."
sudo apt-get autoclean
sudo apt-get clean
