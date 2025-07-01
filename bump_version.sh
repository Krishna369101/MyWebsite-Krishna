#!/bin/bash

# Move to directory where the script is located
cd "$(dirname "$0")" || exit 1

# Check Git repo
if [ ! -d .git ]; then
  echo "❌ Not a git repo. Run: git init"
  exit 1
fi

# Validate VERSION file
if [ ! -f VERSION ]; then
  echo "❌ VERSION file not found."
  exit 1
fi

VERSION=$(cat VERSION | sed 's/^v//')
if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "❌ VERSION format invalid. Should be like 1.2.3"
  exit 1
fi

IFS='.' read -r major minor patch <<< "$VERSION"

case "$1" in
  major) major=$((major + 1)); minor=0; patch=0 ;;
  minor) minor=$((minor + 1)); patch=0 ;;
  patch|"") patch=$((patch + 1)) ;;
  *) echo "Usage: $0 [major|minor|patch]"; exit 1 ;;
esac

NEW_VERSION="$major.$minor.$patch"
echo "$NEW_VERSION" > VERSION
echo "✅ Bumped version: $VERSION → $NEW_VERSION"

git add VERSION
git commit -m "🔖 Bump version to $NEW_VERSION"
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"
git push origin main --tags

echo "🚀 Version $NEW_VERSION committed and tagged."
