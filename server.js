// define the server access port
const PORT = 8000

// include all needed packages
import express from 'express'
import cors from 'cors'
// const express = require('express')
// const cors = require('cors')

// initialize the express server
const app = express()

// imbue with functionality
app.use(express.json())
app.use(cors())


// run the server
app.listen(PORT, () =>  console.log('Gipity server is running on port: ' + PORT))