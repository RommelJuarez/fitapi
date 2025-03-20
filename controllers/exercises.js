const exercisesModel=require('../models/exercises');

const getAllExercises=async(req,res)=>{
    try {
        const exercise=await exercisesModel.find();
        res.status(200).json(exercise);
    } catch (error) {
        console.error('Error loading data from database',error);
        res.status(500).json('Error loading data from database');
    }
};
const getOneExercise=async(req,res)=>{
    try {
        const exerciseId=req.params.id;
        const exercise=await exercisesModel.findById(exerciseId);
        if(!exercise){
            return res.status(404).json({message:'Exercise not found'});
        }
        res.status(200).json(exercise);
    } catch (error) {
        console.error('Error loading exercise data from database',error);
        res.status(500).json('Error loading exercise data from database');
    }
};

const createExercise=async(req,res)=>{
    try {
        const newExercise=new exercisesModel({
            name:req.body.name,
            description:req.body.description,
            category:req.body.category
        });
        await newExercise.save();
        res.status(200).json({message:'Exercise created successfully'});
    } catch (error) {
        console.error('Error creating exercise ',error);
        res.status(500).json('Error creating exercise ');
    }
};

const updateExercise=async(req,res)=>{
    try {
        const exerciseData={
            name:req.body.name,
            description:req.body.description,
            category:req.body.category
        };
        const updateExercise= await exercisesModel.findByIdAndUpdate(
            req.params.id,
            {$set:exerciseData},
            {new:true}
        );
        if(!updateExercise){
           return res.status(404).json({message:'Exercise not found'});
        }
        res.status(200).json({message:'Exercise update successfully'});
    } catch (error) {
        console.error('Error updating exercise ',error);
        res.status(500).json('Error updating exercise ');
    }
};

const deleteExercise=async(req,res)=>{
    try {
        const exerciseId=req.body.id;
        const deleteExercise= await exercisesModel.findByIdAndDelete(exerciseId);
        if(!deleteExercise){
            return res.status(404).json({message:'Exercise not found'});
        }
        res.status(200).json({message:'Exercise deleted successfully'});
    } catch (error) {
        console.error("Error deleting exercise:", error);
        res.status(500).json({ error: "Error deleting exercise" });
    }
};
module.exports={
    getAllExercises,
    getOneExercise,
    createExercise,
    updateExercise,
    deleteExercise,

};