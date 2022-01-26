const mongoose = require("mongoose")
const validator = require("validator")

const querySchema = mongoose.Schema({
    name: {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true,
        validator(value){
            if(!validator.isEmail(value)){
                window.alert("Invalid Email!")
            }
        }
    },
    comment :{
        type: String
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const Query = mongoose.model("Query", querySchema)
module.exports = Query