#!/bin/bash
source ./.env
curl -X GET \
  https://api.todoist.com/rest/v1/tasks \
  -H "Authorization: Bearer ${TOKEN}"