const mogoose=require('mongoose');

const userSchema=new mogoose.Schema({
    userName:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    routine:{
        monday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        tuesday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        wednesday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        thursday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        friday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        saturday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
        sunday:[{type:mogoose.Schema.Types.ObjectId,ref:'exercise'}],
    }
});

userSchema.pre('save',function(next){
    if(!this.routine){
        this.routine={
            monday:[],
            tuesday:[],
            wednesday:[],
            thursday:[],
            friday:[],
            saturday:[],
            sunday:[]
        };
    }
    next();
});
const user=mogoose.model('users',userSchema);
module.exports=user;