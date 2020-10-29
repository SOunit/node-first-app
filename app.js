const http = require('http');

// old syntax
// function rqListener(req, res) {}
// http.createServer(rqListener);

// old syntax
// http.createServer(function (req, res) {});

// new syntax
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('input field');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="/post" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  //   main items
  //   console.log(req.url);
  //   console.log('*****************************');
  //   console.log(req.method);
  //   console.log('*****************************');
  //   console.log(req.headers);
  //   console.log('*****************************');
  res.setHeader('content-type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>');
  res.write('test title');
  res.write('</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>');
  res.write('this text is from node.js');
  res.write('</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
  // process.exit();
});

server.listen(3000);
