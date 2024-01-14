const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended: true}));



app.use(cors());

// Routes.
const indexRoutes = require('./routes/index');


app.use('/api', indexRoutes);


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is responding at ' + port);
})

