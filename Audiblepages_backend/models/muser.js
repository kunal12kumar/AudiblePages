import exp from "constants";
import mongoose from "mongoose";
const {Schema}=mongoose;
import { type } from "os";

const  userdata=new mongoose.Schema({
    email:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    phoneno:{type:Number},
    password:{type:String},
    otp:{type:String},
})

export const saveuserdata=mongoose.model('saveuserdata',userdata);

