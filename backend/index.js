import dot from 'dotenv'
import express from 'express';
import { PORT } from './config.js'
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'


const app = express();
dot.config().parsed

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY
// Option 1: Allow All origins with Default of cors(*)
app.use(cors())

// Option 2: Allow customs origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['content-Type']
//     })
// )

app.get('/', (req, res) => {
    // console.log(req);
    return res.status(234).send('Welcome to my page')
})

app.use('/books', booksRoutes)

mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    });