const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/photography",{  
    useNewUrlParser: true, 
    useUnifiedTopology: true 

}).then(()=>{
    console.log("Database Connection Successfull.")
}).catch((err)=>{
    console.error(err)
})
