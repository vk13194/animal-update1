const express = require('express');
const router = express.Router();
const Store = require('../models/Store')

router.get('/store', async(req, res, next)=>{
    try {
    const store = await Store.find()
    res.json(store)
    } catch (err) {
        res.json('server error')
    }

})

router.post('/store', async(req, res)=>{
    try {
        const store = await Store.create(req.body)
        res.json(store)
    } catch (err) {
        res.json('server error')
    }
})
router.get('/data', async(req, res)=>{
    try {
        const options ={
            location:{
                $geoWithin:{
                    $centerSphere:[ [75.841775,
                        26.865849], 15/3936.2]
                }
            }
           
        }
        const store = await Store.find(options)
        res.json(store)
    } catch (err) {
        res.json('server error')
    }
})
module.exports= router