const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 2412;
const static_Path = path.join(__dirname,'./public');
const view_path = path.join(__dirname,'public/views');

app.set('view engine','hbs');
app.set('views',view_path);
app.use(express.static(static_Path));

app.get("/",(req,res)=>{
    res.render('index.hbs');
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})