console.log("nodemon working...")
const express = require('express')
const app = express()
const port = 8081
// const connectDB = require('./database/connect')
const path = require('path')
require('dotenv').config()

//middleware 
// app.use(express.static(path.join(__dirname, '/static')))
app.use(express.json())

//routes
app.get('/', (req,res) => {
    res.send('Hello World!')
})

const start = () => {
        app.listen(port , console.log(`Server is listening on http://localhost/${port}...`))
}
// start();