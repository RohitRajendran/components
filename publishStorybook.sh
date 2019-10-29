#!/usr/bin/env bash
BRANCH=`git rev-parse --abbrev-ref HEAD`

#Parse any options passed in
while [[ $# -gt 1 ]]
do
key="$1"

case $key in
    -p|--profile)
    PROFILENAME="$2"
    shift # past argument
    ;;
    -b|--bucket)
    BUCKET="$2"
    shift # past argument
    ;;
esac
shift # past argument or value
done

echo "Profile: ${PROFILENAME}"
echo "Bucket: ${BUCKET}"

PROFILE=${AWS_PROFILE:-$PROFILENAME}
STORYBOOK_DIR=.build/

# Publish 'master' to the root directory', and other deployment branches into their own folder.
if [[ $BRANCH == *"master"* ]]; 
then
    aws s3 sync $STORYBOOK_DIR s3://$DOCS_BUCKET --delete
else
    aws s3 sync $STORYBOOK_DIR s3://$DOCS_BUCKET/$BRANCH --delete
fi

aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION" --path "/*"
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION" --path "/${BRANCH}/*"
