const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

//home route
app.get('/', (req, res) => {
    res.send('IS IT A BIRD?')
})

//filling with birds information
const birdRoutes = require('./controllers/birds')
app.use('/birds', birdRoutes)

//filling with ornathologist routes
const ornithologistsRoutes = require('./controllers/ornithologists')
app.use('./ornithologists', ornithologistsRoutes)


module.exports = app