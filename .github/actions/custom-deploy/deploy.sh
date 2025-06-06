#!/bin/bash

ENVIRONMENT=$1
VERSION=$2
NOTIFY_TEAM=$3

echo "Starting deployment..."
echo "Environment: $ENVIRONMENT"
echo "Version: $VERSION"

sleep 2

DEPLOYMENT_URL="https://${ENVIRONMENT}.example.com/v${VERSION}"
DEPLOYMENT_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "Deployed version $VERSION to $ENVIRONMENT"
echo "Deployment URL: $DEPLOYMENT_URL"
echo "Notify team: $NOTIFY_TEAM"

if [[ "$NOTIFY_TEAM" == "true" ]]; then
  echo "Sending notification to team..."
fi

echo "DEPLOYMENT_URL=$DEPLOYMENT_URL"
echo "DEPLOYMENT_TIME=$DEPLOYMENT_TIME"
