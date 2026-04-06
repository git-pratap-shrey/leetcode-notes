#!/usr/bin/env bash
# backfill-dates.sh — one-time script
# Adds a `date:` field to .md files in content/ that are missing one.
# Uses the original Git commit date for each file.
# Safe to re-run (skips files that already have a date field).
#
# Usage: bash backfill-dates.sh
# After running, delete this script:  rm backfill-dates.sh

set -euo pipefail

count=0

while IFS= read -r -d '' file; do
    # Check whether the file already has a "date:" line in frontmatter
    if head -20 "$file" | grep -q '^date:'; then
        continue
    fi

    # Get the earliest git commit date for this file (first time it appeared)
    commit_date=$(git log --follow --format=%ai -- "$file" | tail -1 | cut -d' ' -f1)

    # If git has no record (untracked file), skip it
    if [ -z "$commit_date" ]; then
        echo "[skip] $file (no git history)"
        continue
    fi

    # Insert `date: "YYYY-MM-DD"` after the first `---` line
    sed -i "1a\\date: \"${commit_date}\"" "$file"
    echo "[added] $file → date: ${commit_date}"
    count=$((count + 1))
done < <(find content -name '*.md' -print0)

echo ""
echo "Done. Updated $count file(s)."
