import {grpc} from "@improbable-eng/grpc-web";
import {HelloRequest, HelloReply} from '../generated/proto/helloworld_pb';
import { Greeter, GreeterClient } from '../generated/proto/helloworld_pb_service';
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";

//const host = "http://35.223.20.206:80";
const host = "http://127.0.0.1:8080";
var request = new HelloRequest();
request.setName('World');
const meta = new grpc.Metadata();
// in case of an auth call
meta.append('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwiZ2l2ZW5fbmFtZSI6ImthcmltMSIsImVtYWlsIjoia2lub3R0b0BvY3RvdmVvLmNvbSIsInJvbGUiOiJbe1wiQ29tcGFueUlkXCI6NCxcIkNvbXBhbnlEb21haW5cIjpcIm9jdG92ZW8yXCIsXCJSb2xlXCI6Mn0se1wiQ29tcGFueUlkXCI6NSxcIkNvbXBhbnlEb21haW5cIjpcIm9jdG92ZW8yMlwiLFwiUm9sZVwiOjJ9LHtcIkNvbXBhbnlJZFwiOjIwLFwiQ29tcGFueURvbWFpblwiOlwibmV3Y29tcGFueVwiLFwiUm9sZVwiOjJ9LHtcIkNvbXBhbnlJZFwiOjIyLFwiQ29tcGFueURvbWFpblwiOlwib2N0b3ZlbzUyXCIsXCJSb2xlXCI6Mn0se1wiQ29tcGFueUlkXCI6NTUsXCJDb21wYW55RG9tYWluXCI6XCJuZXdjb21wYW55MjJcIixcIlJvbGVcIjoyfSx7XCJDb21wYW55SWRcIjo5MCxcIkNvbXBhbnlEb21haW5cIjpcIm9jdG92ZW82MlwiLFwiUm9sZVwiOjJ9LHtcIkNvbXBhbnlJZFwiOjEwNCxcIkNvbXBhbnlEb21haW5cIjpcIm9jdG92ZW83MlwiLFwiUm9sZVwiOjJ9LHtcIkNvbXBhbnlJZFwiOjEwOSxcIkNvbXBhbnlEb21haW5cIjpcIm9jdG92ZW85OVwiLFwiUm9sZVwiOjJ9LHtcIkNvbXBhbnlJZFwiOjExNSxcIkNvbXBhbnlEb21haW5cIjpcIm5ld2NvbXBhbnkzXCIsXCJSb2xlXCI6Mn1dIiwiSW50ZXJjb20iOiI1NUY2NDhDRUIxRUU3NEMwNTE3Q0Q2MzVENjY1NTg0RTlBNjI2MEZCRjEzMTY5NzAyN0JBOTA4NzRENDlERUNDIiwibmJmIjoxNTc0MzM1MjM3LCJleHAiOjE1NzQzMzYxMzcsImlhdCI6MTU3NDMzNTIzN30.ijh8Df_nZy_yzqkgtiPPys_QFc8w1YofANtX8VFAFNY');

grpc.unary(Greeter.SayHello, {
  request: request,
  host: host,
  metadata: meta,
  onEnd: (res: UnaryOutput<ProtobufMessage>) => {
    const { status, statusMessage, headers, message, trailers } = res;
    if (status === grpc.Code.OK && message) {
      console.log("all ok. got: ", message.toObject());
    }
  }
})