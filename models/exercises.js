const mongoose=require('mongoose');

const exerciseSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true}
});

const exercise=mongoose.model('exercises',exerciseSchema);
module.exports=exercise;