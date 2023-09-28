const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req , res)=>{
    return res.send('Hello Lương')
}) 

mongoose.connect(`mongodb+srv://luongit:${process.env.MONGO_DB}@be-nodejs.uagn6md.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`)
.then(() => {
    console.log('Connect Db success!')
})
.catch((err) => {
    console.log(err)
})
app.listen(port , () => {
    console.log(">>>> Sever running in port: ", + port)
})