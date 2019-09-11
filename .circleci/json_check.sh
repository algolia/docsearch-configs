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
  echo $f

  if [ ! jq -e -f $f ] then
    echo 'Failed to parse configuration $f, or got false/null'
    exit 1
  fi
done
