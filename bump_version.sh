#!/bin/bash

# Ensure we're in the project root
cd "$(dirname "$0")/.." || exit 1

# Read current version
VERSION=$(cat VERSION)
IFS='.' read -r major minor patch <<< "$VERSION"

# Determine bump type
case "$1" in
  major)
    major=$((major + 1))
    minor=0
    patch=0
    ;;
  minor)
    minor=$((minor + 1))
    patch=0
    ;;
  patch|"")
    patch=$((patch + 1))
    ;;
  *)
    echo "Usage: $0 [major|minor|patch]"
    exit 1
    ;;
esac

# Generate new version
NEW_VERSION="$major.$minor.$patch"
echo "$NEW_VERSION" > VERSION
echo "✅ Bumped version: $VERSION → $NEW_VERSION"

# Git commit + tag + push
git add VERSION
git commit -m "🔖 Bump version to $NEW_VERSION"
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION"
git push origin main --tags

echo "🚀 Version $NEW_VERSION committed and tagged."
