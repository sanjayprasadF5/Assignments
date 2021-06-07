const express = require('express');

const app = express();
const age=[{
    age:32}];


app.use('/year',(req, res) => {
   const age=req.query.age;
    res.send(
        {
            age:1984
        }
    )

const PORT = 3000;

app.listen(PORT, console.log(`server is running ${PORT}`));
