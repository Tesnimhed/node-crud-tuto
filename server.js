import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js'
import './auth/auth.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 2000 ;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB , {
})

app.use(routes);

app.listen(PORT , ()=>{
    console.log(`Le serveur est lancé sur le port :${PORT}`);
})