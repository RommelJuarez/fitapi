const express=require('express');
const{initDB}=require('./db/dbconnection');


const app=express();
const port=process.env.PORT || 8080;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(express.json());

initDB((err,database)=>{
    if(err){
        console.error('Error connecting to the database:',err);
        return;
    }
});

app.use('/',require('./routes'));

app.listen(port,()=>{console.log(`Running on port: ${port}`)});