#!/usr/bin/env bash

# Setup colors
if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
else
NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
fi



repo_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && cd .. && pwd -P)
cd ${repo_dir}
# Download Dependencies
echo -e "Welcome to the ${CYAN}PayloadCMS${NOFORMAT} Demo!"
echo ""
echo -e "⌛ ${BLUE}Downloading required packages${NOFORMAT} - may take several minutes ⌛"
yarn
echo ""
# Launch Dev
echo -e "🚀 ${BLUE}Launching PayloadCMS ${NOFORMAT} 🚀"
yarn dev