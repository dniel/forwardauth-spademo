# Forwardauth-spademo

Simple React + Typescript SPA application for demo of authorization 
and authentication using Forwardauth backend in a SPA client.

## Overview

Should write a quick overview of the application architecture with main points of interest.

# Developing

Developing locally is done with `webpack-dev-server` and is run on port 3000
Hot reload and history API fallback are enabled by default

```
$ npm start
```

# Building

```
$ npm run build
```

## Measure build performance

If the build process seems to be slower than it should you can run the following command to analyze where bottlenecks might occur.

```
$ npm run build:measure
```

## Analyzing bundle size

Performance budget has been enabled for the application. If you get warnings about bundle size when building you have exceeded the build size set by the budget. Consider use of code splitting or analyze your bundle with the following command

```
$ make analyze
```

## Production 
Publish new docker image to DockerHub and Spinnaker will trigger a Pipeline that automaticaly deploys the image to development and beta kubernetes cluster. After waiting for user confirmation the pipeline if user approve release deploy it into the production cluster.

## Tech
- Nginx
- Docker
- HTML