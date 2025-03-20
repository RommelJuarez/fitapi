const routes=require('express').Router();
const users=require('../controllers/users');
const middleware=require('../middlewares/userValidators');

routes.get('/',users.getAllUsers);
routes.get('/:id',middleware.validarIds,users.getOneUser);
routes.post('/',middleware.validarUpdateUser,users.createUser);
routes.put('/:id',middleware.validarIds,middleware.validarUpdateUser,users.updateUser);
routes.delete('/:id',middleware.validarIds,users.deleteUser);

routes.post('/:userId/routine/:day/:exerciseId',middleware.validarIds,users.addExerciseToRoutine);
routes.put('/:userId/routine/:day',middleware.validarUpdateExercise,users.updateExerciseInRoutine);
routes.delete('/:userId/routine/:day/:exerciseId',middleware.validarIds,users.removeExerciseFromRoutine);


module.exports=routes;