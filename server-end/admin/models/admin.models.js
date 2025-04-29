const mongoose=require("mongoose")

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }},{timestamps:true}
)

const Admin=mongoose.model("Admin",adminSchema);
module.exports=Admin;
