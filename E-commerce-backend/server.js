import express from 'express';

//const express = reqiure('express');
const app = express();
const PORT = 3000;

//now put the above variables together to run the server
app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is up and running successfully on Port "+PORT);
        
    }else{
        console.log("Error occured, server can't start "+error);
    }
});
