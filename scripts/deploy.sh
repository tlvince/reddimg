#!/usr/bin/env bash
set -e

info() { echo "$0: $1"; }
error() { info "$1"; exit 1; }

[[ "$TRAVIS" ]] || error "This script assumes its running within Travis"
[[ "$TRAVIS_PULL_REQUEST" == "true" ]] && error "Not deploying pull requests"
[[ "$TRAVIS_BRANCH" == "master" ]] || error "Unsupported branch $TRAVIS_BRANCH"

git config --global user.name "TravisCI"
git config --global user.email "travis@example.com"
cat .known_hosts >> ~/.ssh/known_hosts
gem install heroku
heroku keys:clear
echo yes | heroku keys:add
grunt build
mv dist/index.html dist/index.php
echo yes | grunt buildcontrol:heroku
heroku keys:clear
