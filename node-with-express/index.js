const express = require('express');
const app = express()
const port = 3500;

app.get('/',(req , res) =>{
    res.send('Hello M f**ker')
})

app.listen(port, () =>{
    console.log(`Server is running in port: ${port}`)
})
