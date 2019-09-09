#!/bin/bash
FILES=/configs/*
for f in $FILES
do
  jq -e $f
done