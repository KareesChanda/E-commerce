import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/products.js';

//const express = reqiure('express');
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//midddleware
app.use(cors());
app.use(express.json());

// Serve images from the images folder
app.use('/images', express.static(path.join(__dirname, 'images')));

//Use routes
app.use('/api/products', productRoutes);

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));


//now put the above variables together to run the server
app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is up and running successfully on Port " + PORT);
  } else {
    console.log("Error occured, server can't start " + error);
  }
});