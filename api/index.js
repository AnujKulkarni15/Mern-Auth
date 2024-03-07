import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';


mongoose.connect('mongodb+srv://anujkulkarni16:anuj@mern.vtj0auj.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=mern').then(()=>{
  console.log('connected to MongoDB')
}).catch((err) => {
  console.log(err)
})

const app = express()

app.listen(3000, () => {
  console.log('server is running on port 3000')
})

app.use('/api/user',userRoute);

