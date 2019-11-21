const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const rimraf = require("rimraf");

//const PROTO_NAME = "./helloworld.proto";
const PROTO_PATH = process.argv[2];

if(!PROTO_PATH) {
  return console.warn('you must provide the .proto path to run the script, call it like this: \'npm run protogen.sh ./helloworld.proto \' ')
}

const PROTOC_GEN_TS_PATH = `${__dirname}/node_modules/.bin/protoc-gen-ts.cmd`
//Directory to write generated code to (.js and .d.ts files)
const OUT_DIR = "./generated"


async function createGenFolder() {
  rimraf.sync(OUT_DIR);
  fs.mkdirSync(OUT_DIR);
}


async function compile() {
  console.log("Compiling protobuf definitions");
  const { err, stdout, stderr } = await exec(`protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    ${PROTO_PATH}`);

  if(err) {
    console.err(err);
  }
}


createGenFolder();
compile();