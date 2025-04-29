const mongoose=require("mongoose")

const statusSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Volunteer"
    },
    eventID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event"
    },
    adminStatus:{
        type:Boolean,
        default:false
    },
    volunteerStatus:{
        type:String,
        enum:["waiting","ongoing","completed"]
    }
},{timestamps:true})

const Status=mongoose.model("Status",statusSchema)
module.exports=Status;