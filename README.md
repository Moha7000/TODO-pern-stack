# Docker Node Postgres Example

> Simple example of a dockerized Node/Postgres app

## Quick Start

```bash
# Build a docker image for the project
docker build -t server .

# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

```

# To test using Postman

## create a todo

![Image](https://user-images.githubusercontent.com/17765258/127517123-7ab06467-f4ed-4879-a7dc-f7a0da1a01e8.png)

## get all todos

![Image](https://user-images.githubusercontent.com/17765258/127517609-487c0267-85e0-4ce8-9eab-cc0f70d0a240.png)

## get a specific todo by id

![Image](https://user-images.githubusercontent.com/17765258/127518159-f1ff6ced-77b1-489a-933f-065583f4015a.png)
