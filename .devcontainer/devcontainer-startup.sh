#!/usr/bin/env bash

repo_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && cd .. && pwd -P)
cd ${repo_dir}
# Download Dependencies
yarn
# Launch Dev
yarn dev