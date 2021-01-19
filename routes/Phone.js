const express = require('express')
const router = express.Router();
const Phone = require('../models/Phone')
let serviceID="VA21ccbcf76c1e4e66d69d1d1031895871"
let accountSID="ACb45fdda79ef3c6ff6f1f8a10bfa0ba92"
let authToken="0dfb1d6ba64d66ac0810f2fe5cac1703"
const client = require('twilio')(accountSID,authToken)

router.post('/login',(req,res)=>{
    try {
        if (req.body.phonenumber){
            client
            .verify
            .services(serviceID)
            .verifications
            .create({
                to: req.body.phonenumber,
                channel:'sms' 
            })
            console.log(req.body.phonenumber)
        const phone = new Phone({
           phonenumber:req.body.phonenumber,
           name:req.body.name 
        })
        phone.save()
        res.status(200).json({
            phone
        })
        
    }
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
       
    })
    router.get('/verify', (req, res) => {
        if (req.query.phonenumber && (req.query.code).length === 6) {
            client
                .verify
                .services(serviceID)
                .verificationChecks
                .create({
                    to: `+${req.query.phonenumber}`,
                    code: req.query.code
                })
                .then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            message: "User is Verified!!",
                            data
                        })
                    }
                })
        } else {
            res.status(400).send({
                message: "Wrong phone number or code :(",
                phonenumber: req.query.phonenumber,
                data
            })
        }
    })

    router.post('/verify', (req, res) => {
        if (req.body.phonenumber ) {
            client
                .verify
                .services(serviceID)
                .verificationChecks
                .create({
                    to: req.body.phonenumber,
                    code: req.body.code
                })
                .then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            message: "User is Verified!!",
                            data
                        })
                    }
                })
        } 
    })
     
    
module.exports= router;