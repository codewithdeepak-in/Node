const express = require('express');
const path = require('path');
const router = express.Router();
const axios = require('axios');
const User = require('../models/user');


router.get('/', async(req, res) => {
    try{
        // Check if the path to the file is correct
        if (path.resolve(__dirname, "../public/index.html")) {
            res.sendFile(path.resolve(__dirname, "../public/index.html"));
        } else {
            throw new Error("File path is incorrect");
        }
    }catch(error){
        res.json({message: error.message});
    }
})



router.get('/github', async(req, res) => {
    const query = req.query.username;

    try {
        const response = await axios.get(`https://api.github.com/users/${query}`);
        res.json({data: response.data});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error fetching data from GitHub API'});
    }
})


router.post("/register", async(req, res) => {
    try{
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })

        await user.save();

        res.json({user: user});
    }catch(error){
        res.json({error: error.message});
    }
})

module.exports = router;





