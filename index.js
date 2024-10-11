require('dotenv').config()
const express = require('express')
const app = express()

const p = process.env.PORT 

app.get('/',(req, res)=>
{
    res.send('Hello World')
})
app.get('/login',(req, res)=>{
    res.send('<h1> PLEASE LOGIN AT THIS WEBSITE </h1>')
})
app.get('/yt',(req, res)=>{
    res.send('<h2> YOUTUBE  </h2>')
})
app.get('/tweet',(req,res)=>{
    res.send('BISHT JI')
})
app.listen( p , () => {
    console.log(`EXAMPLE AT PORT ${p}`);
})
