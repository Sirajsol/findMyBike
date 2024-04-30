import mongoose from "mongoose";
const{Schema}=mongoose
const PostSchema=new Schema({
title:{
    type:String,
    required:true
},
desc:{
    type:String
},


img:{
    type:String
},
content:{
    type:String
},
username:{
    type:String
}

})
export default mongoose.models.Post || mongoose.model("Post",PostSchema)