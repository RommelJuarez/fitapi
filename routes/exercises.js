const routes=require('express').Router();
const exercises=require('../controllers/exercises');
const middleware=require('../middlewares/exercisesValidators');
const authMiddleware=require('../middlewares/authAunthenticator');

routes.get('/',authMiddleware.isAuthenticatedMiddleware,exercises.getAllExercises);
routes.get('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarId,exercises.getOneExercise);
routes.post('/',authMiddleware.isAuthenticatedMiddleware,middleware.validarBodyExerciseCreate,exercises.createExercise);
routes.put('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarId,middleware.validarBodyExercise,exercises.updateExercise);
routes.delete('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarId,exercises.deleteExercise);

    
module.exports=routes;