#!/bin/sh

set -ex

npm run build
git push
npx firebase deploy