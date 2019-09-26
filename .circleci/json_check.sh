#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

FILES=./configs/*
for f in $FILES
do
  jq -e '.nb_hits' 1>/dev/null < "$f" || { echo "Issue with ${f} is not well formated and/or missing nb_hits key"; exit 1;}
done
