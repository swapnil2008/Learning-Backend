require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/message', (req, res) => {
    res.send('Message: Server Created!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>THE USER HAS LOGGED IN</h1>')
})
app.get('/logout', (req, res) => {
    res.send('Message: The user has logged Out!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})