const app = require('./express');
const port = 2000;
const mongoose = require('mongoose');
const dataBase = 'mongodb://localhost:27017/Eshop';

mongoose.connect(dataBase,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to mongodb');
    app.listen(port,()=>{
        console.log('server ready');
    })
}).catch((error)=>{
    console.error(error);
})


