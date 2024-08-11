
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('This is first class\nHello World!\n Today we learn about modeuls , import, export etc ' );
});

// starts a simple http server locally on port 3000
server.listen(3000, () => {
  console.log('Server is running/listening on port 3000');
});

// run with `node server.mjs`
