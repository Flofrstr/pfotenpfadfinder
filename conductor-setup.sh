#!/bin/bash
set -e

echo "🐾 Setting up Pfotenpfadfinder workspace..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy .env file if it exists in the root
if [ -f "$CONDUCTOR_ROOT_PATH/.env" ]; then
    echo "📋 Copying .env file from root..."
    cp "$CONDUCTOR_ROOT_PATH/.env" .env
else
    echo "ℹ️  No .env file found in root (this is okay if not needed)"
fi

# Set up git hooks
echo "🔗 Setting up git hooks..."
npm run prepare

echo "✅ Workspace setup complete!"
