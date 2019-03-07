const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  //This is the incoming route, just like in Vue
  let url = req.url;

  //set up some routes
  if(url == "/about") {
    res.write(`<h1>You're on the ${url} page!</h1>`);
    res.end(); //end the response
  } else if (url == "/contact") {
    res.write(`<h1>Now you're on the ${url} page!</h1>`);
    Res.end (); //end the response
  } else {
    res.write('Hello World\nThis is node running on a server'); 
    res.end();// res.end is like a php echo statement 
  }
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});