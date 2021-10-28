#!/bin/bash
source ./.env
curl https://api.todoist.com/sync/v8/completed/get_stats \
    -H "Authorization: Bearer ${TOKEN}"