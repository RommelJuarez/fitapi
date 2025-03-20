const userShema=require('../models/users');


const getAllUsers=async(req,res)=>{
    try {
        const users=await userShema.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error loading data from database: ',error);
        res.status(500).json({error:'Error loading data from database'});
    }
};

const getOneUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const user=await userShema.findById(userId);
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error loading one user from database:", error);
        res.status(500).json({ error: "Error loading one user from database" });
    }
};

const createUser=async(req,res)=>{
    try {
        const newUser=new userShema({
            userName:req.body.userName,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email
        });
        await newUser.save();
        res.status(201).json({mesagge:'User created successfully'});

    } catch (error) {
        console.error("Error creating one user from database:", error);
        res.status(500).json({ error: "Error creating one user from database" });
    }
};

    const updateUser=async(req,res)=>{
        try {
            const updateData={
                userName:req.body.userName,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email
            };
            const updateUser= await userShema.findByIdAndUpdate(
                req.params.id,
                {$set:updateData},
                {new:true}
            );
            if(!updateUser){
                return res.status(404).json({error:'user to update not found'});
            }
            res.status(200).json({message:'user updated successfully'});
        } catch (error) {
            console.error("Error updating one user from database:", error);
            res.status(500).json({ error: "Error updating one user from database" });
        }

    };

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; 
        const deletedUser = await userShema.findByIdAndDelete(userId); 
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: " User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Error deleting user" });
    }
};
const addExerciseToRoutine = async (req, res) => {
    try {
        const { userId, exerciseId, day } = req.params;

        
        const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        if (!validDays.includes(day)) {
            return res.status(400).json({ error: "Invalid day of the week" });
        }

        
        const updatedUser = await userShema.findByIdAndUpdate(
            userId,
            { $push: { [`routine.${day}`]: exerciseId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Exercise added successfully", user: updatedUser });
    } catch (error) {
        console.error("Error adding exercise:", error);
        res.status(500).json({ error: "Error adding exercise" });
    }
};
const updateExerciseInRoutine = async (req, res) => {
    try {
        const { userId, day } = req.params;
        const { oldExerciseId, newExerciseId } = req.body;

        
        const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        if (!validDays.includes(day)) {
            return res.status(400).json({ error: "Invalid day of the week" });
        }

        
        const updatedUser = await userShema.findOneAndUpdate(
            { _id: userId, [`routine.${day}`]: oldExerciseId },
            { $set: { [`routine.${day}.$`]: newExerciseId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User or exercise not found" });
        }

        res.status(200).json({ message: "Exercise updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating exercise:", error);
        res.status(500).json({ error: "Error updating exercise" });
    }
};
const removeExerciseFromRoutine = async (req, res) => {
    try {
        const { userId, exerciseId, day } = req.params;

       
        const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        if (!validDays.includes(day)) {
            return res.status(400).json({ error: "Invalid day of the week" });
        }

        
        const updatedUser = await userShema.findByIdAndUpdate(
            userId,
            { $pull: { [`routine.${day}`]: exerciseId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User or exercise not found" });
        }

        res.status(200).json({ message: "Exercise removed successfully", user: updatedUser });
    } catch (error) {
        console.error("Error removing exercise:", error);
        res.status(500).json({ error: "Error removing exercise" });
    }
};

module.exports={
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addExerciseToRoutine,
    updateExerciseInRoutine,
    removeExerciseFromRoutine,
    };