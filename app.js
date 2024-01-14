const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));



// Routes.
const indexRoutes = require('./routes/index');




app.use('/', indexRoutes);


let port = 3000;

app.listen(port, () => {
    console.log('Server is responding at ' + port);
})

