const express = require('express');
const hbs = require('hbs');
const Query = require('./src/models/query');
const path = require('path');
const app = express();
const port = process.env.PORT || 2412;
app.use(express.urlencoded({extended: true}))
require('./src/db/connect')
const static_Path = path.join(__dirname,'./public');
const templatepath = path.join(__dirname,'public/templates/views');
const partialpath = path.join(__dirname,'public/templates/partials');

app.set('view engine','hbs');
app.set('views',templatepath);
app.use(express.json());
hbs.registerPartials(partialpath);
app.use(express.static(static_Path));

app.get("/",(req,res)=>{
    res.render('index.hbs');
})

app.get("/about",(req,res)=>{
    res.render('about.hbs');
})

app.get("/photography101",(req,res)=>{
    res.render('photography.hbs');
})

app.get("/contact",(req,res)=>{
    res.render('contact.hbs');
})

app.post("/contact",async(req,res)=>{
    try{
        const queryData = new Query(req.body)
        console.log(queryData)
        result = await queryData.save()
        console.log(result)
        res.status(201).render("contact")
    }catch(error){
        res.status(500).send(error)
    }
})
app.get("/event",(req,res)=>{
    res.render('event.hbs');
})
app.get("/bird",(req,res)=>{
    res.render('bird.hbs');
})

app.get("/portrait",(req,res)=>{
    res.render('portrait.hbs');
})

app.get("/nature",(req,res)=>{
    res.render('nature.hbs');
})

app.get("/monument",(req,res)=>{
    res.render('monument.hbs');
})
app.get("/wildlife",(req,res)=>{
    res.render('wildlife.hbs');
})

app.get("/BW",(req,res)=>{
    res.render('BW.hbs');
})
app.get("/random",(req,res)=>{
    res.render('random.hbs');
})
app.get("/event",(req,res)=>{
    res.render('event.hbs');
})
// test
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})