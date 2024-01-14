const express = require('express');
require('dotenv').config();


const app = express();
app.use(express.urlencoded({extended: true}));



// Routes.
const indexRoutes = require('./routes/index');


app.use('/', indexRoutes);


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is responding at ' + port);
})

