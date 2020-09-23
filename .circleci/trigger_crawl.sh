#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

echo "Hello world!"
git diff HEAD original_repo/master --name-only ./configs
FILES=$(git diff HEAD original_repo/master --name-only ./configs)
echo $FILES

for f in $FILES
do
    echo "Triggering a crawl for $f configuration"
    jq -e '.nb_hits=0 | .' < "$f" | curl -d @- -H 'Content-Type: application/json' -X POST ${CRAWL_ENDPOINT} -u ${CRAWL_USERNAME}:${CRAWL_PWD}
    
done
