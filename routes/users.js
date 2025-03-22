const routes=require('express').Router();
const users=require('../controllers/users');
const middleware=require('../middlewares/userValidators');

routes.get('/',users.getAllUsers);
routes.get('/:id',middleware.validarIds,users.getOneUser);
routes.post('/',middleware.validarUpdateUser,users.createUser);
routes.put('/:id',middleware.validarIds,middleware.validarUpdateUser,users.updateUser);
routes.delete('/:id',middleware.validarIds,users.deleteUser);

routes.post('/:id/routine/:day/:exerciseId',middleware.validarIds,middleware.validarDayId,middleware.validarExerciseId,users.addExerciseToRoutine);
routes.put('/:id/routine/:day',middleware.validarUpdateExercise,users.updateExerciseInRoutine);
routes.delete('/:id/routine/:day/:exerciseId',middleware.validarIds,middleware.validarDayId,middleware.validarExerciseId,users.removeExerciseFromRoutine);


module.exports=routes;