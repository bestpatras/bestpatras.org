#!/bin/sh
FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0