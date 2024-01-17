const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');



(async function(){
    const connection = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.0oxbzoa.mongodb.net/sample_restaurants?retryWrites=true&w=majority`)
    if(connection){
        console.log('Connected to Database.');
    }else{
        console.log('Not Connected to Database.');
    }
})()

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(cors());
app.use(express.static('public')); // Assuming your JavaScript files are in the 'public' folder


// Routes.
const indexRoutes = require('./routes/index');


app.use('/', indexRoutes);


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is responding at ' + port);
})

