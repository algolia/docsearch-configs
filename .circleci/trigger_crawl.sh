#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

FILES=$(git diff HEAD~1 HEAD --name-only --diff-filter=ACM ./configs)

for f in $FILES
do
    echo "Triggering a crawl for $f configuration"
    jq -e '.nb_hits=0 | .' < "$f" | curl -d @- -H 'Content-Type: application/json' -X POST ${CRAWL_ENDPOINT} -u ${CRAWL_USERNAME}:${CRAWL_PWD}
    
done
