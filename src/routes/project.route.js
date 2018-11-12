const express = require('express');

const router = express.Router();

const Project = require('../models/project');

router.get('/', (req , res )=> {

    })
router.post('/', (req ,res )=> {
        console.log(req.body);
        let obj = new Project (req.body)

        console.log(obj);
        obj.save();
        res.json({response: "Guardo correctamente."})
    })

module.exports = router;