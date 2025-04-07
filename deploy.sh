#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[1/4]${NC} Building project..."
npm run build

echo -e "${BLUE}[2/4]${NC} Adding all files to git..."
git add .

echo -e "${BLUE}[3/4]${NC} Committing changes..."
git commit -m "Deploy to Cloudflare Pages"

echo -e "${BLUE}[4/4]${NC} Pushing to GitHub..."
git push origin main

echo -e "${GREEN}Done!${NC} Your project has been pushed to GitHub."
echo "Now set up a Cloudflare Pages project using these steps:"
echo "1. Go to https://dash.cloudflare.com/ and log in"
echo "2. Navigate to Pages > Create a project > Connect to Git"
echo "3. Select your GitHub repository"
echo "4. Configure build settings:"
echo "   - Framework preset: None"
echo "   - Build command: npm run build"
echo "   - Build output directory: out"
echo "5. Click 'Save and deploy'" 