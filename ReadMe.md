## Let's Finish Node.


## How the Server Works

  <code>
                        Listen           
  Client ----Express----> Server ---------------> File System
  |                        |                        |
  |<----------------- Response <----------------- File |
  |                        |                        |
  |                        |                        |
  |                        |<----------------- Code |
  |<----------------- Response <----------------- Server

  </code>

The server works by listening for requests from the client. When a request is received, the server processes the request and sends a response back to the client. The server uses Express, a web application framework for Node.js, to handle these requests and responses. The server can also interact with the file system to read and write data.


  <code>

    ├── package.json
    ├── app.js
    ├── controllers
    │   └── userController.js
    ├── models
    │   └── userModel.js
    ├── routes
    │   └── index.js
    ├── middlewares
    │   └── authMiddleware.js
    ├── utils
    │   └── helper.js
    ├── services
    │   └── Database-call.
    ├── views
    │   └── index.html
    └── config
        └── config.js

  </code>


### Deployment of Application.

<code>

</code>