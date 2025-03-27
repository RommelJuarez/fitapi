const routes=require('express').Router();
const userRoutes=require('./users');
const exerciseRoutes=require('./exercises');
const authRoutes=require('./authRoutes');


routes.use('/',require('./swagger'));


routes.use('/users',userRoutes);
routes.use('/exercises',exerciseRoutes);
routes.use('/',authRoutes);


module.exports=routes;