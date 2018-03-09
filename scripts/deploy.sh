#!/bin/bash

set -e # exit with nonzero exit code if anything fails

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

echo "Starting to update release\n"

#copy data we're interested in to other place
cp -R dist $HOME/dist

#go to home and setup git
cd $HOME
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis"

#using token clone release branch
git clone --quiet --branch=release https://${GH_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git release > /dev/null

#go into directory and copy data we're interested in to that directory
cd release
cp -Rf $HOME/dist/* .

echo "Allow files with underscore https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/" > .nojekyll
echo "[View live](https://${GH_USER}.github.io/${GH_REPO}/)" > README.md

#add, commit and push files
git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq origin release > /dev/null

echo "Done updating release\n"

else
 echo "Skipped updating release, because build is not triggered from the master branch."
fi;
