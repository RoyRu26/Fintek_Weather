const express = require('express')
const cors = require('cors')
require('dotenv').config()

const weatherRoute = require('./routes/weatherRoute')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', weatherRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})