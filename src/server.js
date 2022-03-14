'use strict';

const cors = require('cors');
const express = require('express');
const router = require('./auth/router')
const errorHandle500 =require("./middleware/500");
const errorHandle404 =require("./middleware/404");
const v1 =require("./routers/v1")
const v2 =require("./routers/v2")


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1',v1)
app.use('/api/v2',v2)

app.use(router)


app.get('/' ,(req,res)=>{
    res.send("Home Page");
});


app.use(errorHandle500);
app.use("*",errorHandle404);



function start(port) {
app.listen(port, () => {
    console.log(`Server online through port ${port}`);
})    
}



module.exports ={
    app :app,
    start :start
}