const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express() 
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/crud")
// mongoose.connect("mongodb+srv://127.0.0.1:27017/crud")
app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})
app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err => res.json(err))
}) 
app.get('/getUser/:id',(req , res)=>{
    const id = req.params.id ; 
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
}) 