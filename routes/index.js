const routes=require('express').Router();
const userRoutes=require('./users');
const exerciseRoutes=require('./exercises');

routes.use('/',require('./swagger'));

routes.use('/users',userRoutes);
routes.use('/exercises',exerciseRoutes);


module.exports=routes;