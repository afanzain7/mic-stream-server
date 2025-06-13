const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('🎤 Mic stream connected');

  ws.on('message', function incoming(data) {
    // data is expected to be PCM audio buffer
    console.log(`Received ${data.length} bytes`);
    // You can broadcast to others, save to file, or process here
  });

  ws.on('close', () => {
    console.log('🔌 Disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`🚀 WebSocket server listening on port ${PORT}`);
});
