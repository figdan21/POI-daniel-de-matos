const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/calculate') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    rl.question('Digite um número para calcular a raiz quadrada: ', (num) => {
      const numero = parseFloat(num);
      const raizQuadrada = Math.sqrt(numero);

      const responseHTML = `
        <html>
          <head>
            <title>Resultado da Raiz Quadrada</title>
          </head>
          <body>
            <h1>A raiz quadrada de ${numero} eh: ${raizQuadrada}</h1>
          </body>
        </html>
      `;

      res.end(responseHTML);
      rl.close();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Square root');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
