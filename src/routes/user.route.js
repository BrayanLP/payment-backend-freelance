const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res )=> {
    User.find((err, result)=> {
        if(err) return next(err);
        res.json(result)
    })
})

router.post('/', (req ,res )=> {
    console.log(req.body);
    // let obj = new User (req.body)
    let obj = new User ({
        username: req.body.username,
        email: req.body.email
    });
    console.log(obj);
    obj.save((err)=>{
        if(err ) return next(err);
        res.json({response: "Guardo correctamente."})
    });
})

module.exports = router;