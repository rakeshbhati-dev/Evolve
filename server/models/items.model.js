import mongoose from "mongoose";

const itemSchema=new mongoose.Schema({
    item:{type:String,required:true},
},{timestamps:true})

const item=mongoose.model('Item',itemSchema)

export default item