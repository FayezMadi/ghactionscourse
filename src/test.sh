#!/bin/bash

EXPECTED="Hello, Test!"

# Fixed missing single quote after Test and corrected path to ./app
OUTPUT=$(node -e "console.log(require('./app')('Test'))")

# Fixed missing space before ]
if [ "$OUTPUT" == "$EXPECTED" ]; then
    echo "Test Passed Successfully!"
    exit 0
else
    echo "This Test Failed! Expected '$EXPECTED' but got '$OUTPUT'"
    exit 1
fi