const express = require('express');
const router = express.Router();

const Bird = require('../models/bird')

router.get('/', async(req, res) => {
    try {
        const birds = await Bird.all
        res.json({ birds })
    } catch (err) { res.status(500).json({ err }) }
})

router.get('/:id', async(req, res) => {
    try {
        const birds = await Bird.findById(req.params.id)
        console.log("matching bird to id")
        res.json(birds)
    } catch (err) { res.status(404).json({ err }) }
})


module.exports = router