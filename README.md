# Cinerino Telemetry Jobs Application

[![CircleCI](https://circleci.com/gh/cinerino/telemetry-jobs.svg?style=svg)](https://circleci.com/gh/cinerino/telemetry-jobs)

## Table of contents

* [Usage](#usage)
* [License](#license)

## Usage

### Environment variables

| Name                | Required              | Value                     | Purpose                |
|---------------------|-----------------------|---------------------------|------------------------|
| `DEBUG`             | false                 | cinerino-telemetry-jobs:* | Debug                  |
| `NODE_ENV`          | true                  |                           | Environment name       |
| `MONGOLAB_URI`      | true                  |                           | MongoDB connection URI |
| `REDIS_HOST`        | true                  |                           | Redis Cache host       |
| `REDIS_PORT`        | true                  |                           | Redis Cache port       |
| `REDIS_KEY`         | true                  |                           | Redis Cache key        |
| `WEBJOBS_ROOT_PATH` | only on Azure WebApps | dst/jobs                  |                        |

## License

ISC
