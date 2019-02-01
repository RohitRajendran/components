#!/usr/bin/env bash
DOCS_BUCKET=docs.unitedincome.team
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
aws s3 sync $STORYBOOK_DIR s3://$DOCS_BUCKET/components/$BRANCH --delete
