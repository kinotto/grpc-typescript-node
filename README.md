# grpc Hello World example Typescript + Nodejs

<img src="https://i.imgur.com/rxi5VZ1.png" />


## Quick Overview

This is a simple grpc hello world example built with typescript and nodejs

## Requirements
- [x] [protoc](https://github.com/google/protobuf) compiler to generate .js and .d.ts files for your request and response classes. 
- [x] [docker](https://docs.docker.com/docker-for-windows/install/) to run the envoy proxy 


## Usage

clone the repository then:

`npm install` or `yarn install`

`npm build:proto` to run the local node script to generate .js and .d.ts files for your request and response classes

`npm run start-envoy` to run the proxy in charge of translating the call from http 1.1 to http2

`npm run start-server` to run the server that will resolve the grpc calls

`npm start` (to start the local webpack server)

`npm build` (to build the code)


## Output

<img src="https://i.imgur.com/u8AAPwM.png" />

## link and resources
- [x] [grpc-web](https://github.com/grpc/grpc-web)
- [x] [improbable-eng/grpc-web](https://github.com/improbable-eng/grpc-web)