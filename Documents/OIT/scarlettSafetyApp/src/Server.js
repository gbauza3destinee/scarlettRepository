const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html lang="en">
  <body>
    <p h2="para"> Scarlett App </h2>
    <button onclick="myFunction();"> Tap!</button>
  </body>
  <script>
  function myFunction() {
    window.open("tel:+15678675309");
  }
  </script>
</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(new Date().getTime());
  console.log(new Date().getDate());
  console.log("Lattitude"+ navigator.geolocation.getCurrentPosition.coords());
  console.log("Longitude"+ navigator.geolocation.getCurrentPosition.coords());

});