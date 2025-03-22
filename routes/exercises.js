const routes=require('express').Router();
const exercises=require('../controllers/exercises');
const middleware=require('../middlewares/exercisesValidators');

routes.get('/',exercises.getAllExercises);
routes.get('/:id',middleware.validarId,exercises.getOneExercise);
routes.post('/',middleware.validarBodyExerciseCreate,exercises.createExercise);
routes.put('/:id',middleware.validarId,middleware.validarBodyExercise,exercises.updateExercise);
routes.delete('/:id',middleware.validarId,exercises.deleteExercise);


module.exports=routes;