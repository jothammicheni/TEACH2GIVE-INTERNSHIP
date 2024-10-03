import http from 'http';
import routes from './router.js'; 
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers for every request
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  routes(req, res);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
