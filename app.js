const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


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



const allowedOrigins = ['http://localhost:4000', 'https://codewithdeepak.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Assuming 'public' is the directory containing your static files
app.use(express.static(path.join(__dirname, 'public'))); // Assuming your JavaScript files are in the 'public' folder


// Routes.
const indexRoutes = require('./routes/index');
const ApiRoute = require('./routes/api');

app.use('/', indexRoutes);
app.use('/api', ApiRoute)

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is responding at ' + port);
})

