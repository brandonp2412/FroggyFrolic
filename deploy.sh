#!/bin/sh

npm run build
git push
npx firebase deploy