import dgram from 'dgram';
import pkg from 'node-mavlink';
const { MavLinkPacketSplitter, MavLinkPacketParser, MavLinkPacketRegistry, minimal, common, ardupilotmega } = pkg;


// Set up UDP server
const PORT = 14445;
const HOST = 'localhost';
const server = dgram.createSocket('udp4');

// Create a registry of mappings between a message id and a data class
const REGISTRY = {
  ...minimal.REGISTRY,
  ...common.REGISTRY,
  ...ardupilotmega.REGISTRY,
};

// Create a splitter and parser for MAVLink packets
const splitter = new MavLinkPacketSplitter();
const parser = new MavLinkPacketParser();

// Set up the UDP server to listen for incoming messages
server.on('message', (message, remote) => {
  // console.log(Received message from ${remote.address}:${remote.port});

  // Pass the message to the splitter
  splitter.write(message);
});

// Pipe the splitter output to the parser
splitter.pipe(parser);

// Handle parsed MAVLink packets
parser.on('data', packet => {
  const clazz = REGISTRY[packet.header.msgid];
  if (clazz) {
    const data = packet.protocol.data(packet.payload, clazz);
    if ('x' in data) {
      console.log('x value:', data.x);
    }
  } else {
    console.log(`Unknown message ID: ${packet.header.msgid}`);
  }
});

// Bind the server to the specified port and host
server.bind(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});