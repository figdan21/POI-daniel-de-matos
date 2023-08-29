// Import required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send a response
  res.end('Aplicação POI daniel de matos');
});

// Set the port and start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
