
import { createServer } from 'http';

const server = createServer((req, res) => {
  const url = req.url
  if (url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("This is main page")
  }
  else if(url==="/home"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("This is home page")
  }
  else if (url==="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("This is About page")
  }
  else{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("404 not found")
  }
});


server.listen(3000, () => {
  console.log('Server is running/listening on port 3000');
});


