const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', async(req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }catch(error){
        res.json({message: error.message})
    }
})


router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);
    // Handle the signup logic here

    res.send('Signup successful');
});
module.exports = router;