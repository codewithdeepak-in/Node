// Let's Revise Node.

const http = require('http');
// Loads the http module.
const port = 3001;
http.createServer((request, response) => {
    
    // 1. Tell the browser everything is OK (Status Cod 200), and the data is in plain text.
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    // 2. Write the announced text to the body  of the page.
    response.write('Hello World!');

    // 3. Tell the server that all of the response headers and body have been sent.
    response.end();

}).listen(port, () => {
    console.log('Server is responding at 3001')
});

// Hello World With Node.