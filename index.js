require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookieparser')
const router = require('./routes/router')
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express()


app.use(express.json())
app.use(cors())
app.use('/api', router);


const start = async () => {
    try {
        app.listen(PORT,() => console.log(`Server started on PORT = ${PORT}`))
    }catch (e) {
        console.log(e);
    }
}

start()