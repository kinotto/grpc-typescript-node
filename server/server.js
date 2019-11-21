const messages = require('../generated/proto/helloworld_pb');
const services = require('../generated/proto/helloworld_pb_service');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = '../proto/helloworld.proto';


/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  console.log(call.metadata.get("authorization"));
  callback(null, {message: 'Hello ' + call.request.name});
}


const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });
const helloWorldProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
const server = new grpc.Server();
server.addService(helloWorldProto.Greeter.service, {sayHello: sayHello});
const boundPort = server.bind('127.0.0.1:9090', grpc.ServerCredentials.createInsecure());
console.log(`Server running at http://127.0.0.1:${boundPort}`)
server.start();