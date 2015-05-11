#!/bin/bash

# Basic command to run Gulp from the Finder

export PATH=$PATH:/usr/local/bin
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done

# Change to the script directory
echo "Looking up new dependencies"
cd -P "$( dirname "$SOURCE" )"

# Install dependencies
npm install

while ! gulp; do
    red='\033[0;31m'
    NC='\033[0m' # No Color
    echo -e "${red}GULP CRASHED!! Restarting in 15 seconds ...${NC}"
    sleep 15
done
