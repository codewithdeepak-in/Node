const express = require('express');
const path = require('path');
const router = express.Router();
const axios = require('axios');
const User = require('../models/user');
const Restaurant = require('../models/restaurants');


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
        const data = await User.find();

        res.json({data: data});
    }catch(error){
        res.json({error: error.message});
    }
})


router.get('/restaurant', async(req, res) => {
    try{
        const data = await Restaurant.aggregate([
            {
                $group: {
                    _id: "$cuisine",
                    buildings: { 
                        $push: {
                            $concat: ["$address.street", " ","$address.zipcode"]
                    }
                }
                }
            },
            {   
                $project: {
                    buildings: 1,
                    country: "$_id",
                    _id: 0
                }
            }
        ]);

        res.json(data);
    }catch(error){
        res.json({error: error.message});
    }
})

module.exports = router;





