#!/bin/bash

set -e
set -o pipefail

# Function to run a command and show logs only on error
run_command() {
    output=$(eval "$*" 2>&1)
    exit_code=$?
    if [ $exit_code -ne 0 ]; then
        echo "[ERROR] Command failed: $*"
        echo "$output"
        exit $exit_code
    fi
}

echo "🛠️ Fix permissions..."
run_command "sudo chown -R node:node node_modules"

echo "⚙️ Installing Bun..."
run_command "curl -fsSL https://bun.sh/install | bash"
run_command "source ~/.bashrc"

export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

echo "📦 Installing NPM dependencies..."
if [ -f package-lock.json ]; then
  run_command "npm ci"
elif [ -f bun.lockb ] || [ -f bun.lock ]; then
  run_command "bun install --frozen-lockfile"
else
  run_command "npm install"
fi

echo "🌱 Installing Specify CLI (spec-kit)..."
run_command "uv tool install specify-cli --from git+https://github.com/github/spec-kit.git"

echo "🧹 Cleaning cache..."
run_command "sudo apt-get autoclean"
run_command "sudo apt-get clean"

echo "✅ Setup completed. Happy coding! 🚀"
echo
echo 
echo "------------------------------------------------------------------------------"
echo "⏭️ Recommended next steps: "
echo "   - Run \`specify init --here\` to initialize/update Specify in this project."
echo "------------------------------------------------------------------------------"
