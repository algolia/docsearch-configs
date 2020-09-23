#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

echo $(git diff HEAD original_repo/master --name-only ./configs)

FILES=$(git diff HEAD original_repo/master --name-only ./configs)

for f in $FILES
do
    # Valid JSON and look for nb_hits
    jq -e '.nb_hits' 1>/dev/null < "$f" || { echo "Issue with ${f} is not well formated and/or missing nb_hits key"; exit 1;}
    
    # Valid config according to JSON schema
    
    # Error related to the HUB validator, you can disregard the check if the following command fails
    jq -e 'tojson | {config:.}' < "$f" | curl -X POST --silent --show-error -d @- -H "Content-Type: application/json" https://docsearch-hub.herokuapp.com/api/docsearch/validator/ -o "validator_reply.json"
    # Parse response from HUB. This check is required
    jq -e '.[0].message' < "validator_reply.json" && { echo "Config ${f} is not compliant with JSON schema due to ^"; exit 1;}
    
    echo "$f is a valid configuration"
    
done
