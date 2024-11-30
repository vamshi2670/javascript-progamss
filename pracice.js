//get method is used for retrive data
// const express=require('express')
// const app=express()
// const port=4000;
// const hostname='127.0.0.1';

// app.get((req,res)=>{
//     const data={
//         message:'hello theis your message'
//     }
//     res.json(data)
// })
//send data to server
//  app.post('/api/data',(req,res)=>{
//     const newdata=req.body;
//     console.log('data received',newdata)
//     res.status(201).json({
//         message:"data received sucessfully",
//         data:newdata
//     })
//  })

//put PUT requests are used to update an existing resource or 
//create a resource if it doesn't exist.
// app.put('/api/data/:id', (req, res) => {
//     const id = req.params.id;
//     const updatedData = req.body;
    
//     // Update the data (e.g., in a database)
//     console.log(`Updating data with ID: ${id}`);
//     console.log('New data:', updatedData);
    
//     res.json({
//       message: `Data with ID: ${id} updated successfully!`,
//       data: updatedData
//     });
//   });

// app.use((req, res, next) => {
//     console.log(`${req.method} request for '${req.url}'`);
//     next();
//   });
  
//   // Use predefined middleware
//   app.use(express.json()); // Parse JSON bodies
//   app.use(express.urlencoded({ extended: true }));

//   app.listen(port,hostname,()=>{console.log('server started')})

//crud
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory data store for example purposes
let dataStore = [];

// Create
app.post('/api/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData);
  res.status(201).json({
    message: 'Data created successfully!',
    data: newData
  });
});

// Read
app.get('/api/data', (req, res) => {
  res.json(dataStore);
});

// Update
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  dataStore = dataStore.map((item, index) => index === id ? updatedData : item);
  res.json({
    message: `Data with ID: ${id} updated successfully!`,
    data: updatedData
  });
});

// Delete
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  dataStore = dataStore.filter((_, index) => index !== id);
  res.json({
    message: `Data with ID: ${id} deleted successfully!`
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});