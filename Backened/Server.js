const express= require('express');
const dotenv= require('dotenv')
const app=express();
dotenv.config();
app.get('/',(req,res)=>{
   res.send("api running");
});
// npm nodemon is used to restart the server whenbverf we hit save


// app.get('/api/notes',(req,res)={
//     res.json();

// });

// app.get('/api/notes/:id',(req,res)=>{
//      const noteFind= notes.find((n)=> n._id===req.params.id);

//      if(noteFind) return res.send("notes find");

//      res.send("Not find");


const PORT= process.env.PORT|| 5000;

app.listen(PORT,console.log(`server is running on port ${5000}`));