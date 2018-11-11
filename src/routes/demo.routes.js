const express = require('express');
const router = express.Router();
// const asyncMiddleware = require('./utils/asyncMiddleware');
const Demo = require('../models/demo');

// router.get('/', asyncMiddleware (async (req, res, next) => { 
//         const tasks = await Demo.find();
//         res.json(tasks);
//         console.log("entre al demo")
 
//   }));

router.get('/', (req, res) => {
    Demo.find((err, demo ) =>{
        // console.log(err,demo)
        res.json(demo)
    })
})

router.post('/', (req,res )=> {
    // Demo.
    // req.body()
    console.log( req.body)
    let demo = new Demo(req.body)
    // Demo = req.body;
    console.log(demo)
    demo.save();
    res.json({status: "Guardo"})
})

// router.get('/', async (req, res) => {
//     const tasks = await Demo.find();
//     console.log(tasks)
//     res.json(tasks)

// })

// router.post('/', async (req, res ) => {
//     const { title , description } = req.body;
//     const task = new Task({
//         title,
//         description
//     })
//     await task.save();

//     console.log(task)
//     res.json({status: 'saved'});
// })

module.exports = router;