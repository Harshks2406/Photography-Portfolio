const express = require('express');
const app = express();
const port = process.env.PORT || 2412;

app.get("/",(req,res)=>{
    res.send();
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})