const routes=require('express').Router();
const users=require('../controllers/users');
const middleware=require('../middlewares/userValidators');
const authMiddleware=require('../middlewares/authAunthenticator');

routes.get('/',authMiddleware.isAuthenticatedMiddleware,users.getAllUsers);
routes.get('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarIds,users.getOneUser);
routes.post('/',authMiddleware.isAuthenticatedMiddleware,middleware.validarCreateUser,users.createUser);
routes.put('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarIds,middleware.validarUpdateUser,users.updateUser);
routes.delete('/:id',authMiddleware.isAuthenticatedMiddleware,middleware.validarIds,users.deleteUser);

routes.post('/:id/routine/:day/:exerciseId',authMiddleware.isAuthenticatedMiddleware,middleware.validarIds,middleware.validarDayId,middleware.validarExerciseId,users.addExerciseToRoutine);
routes.put('/:id/routine/:day',authMiddleware.isAuthenticatedMiddleware,middleware.validarUpdateExercise,users.updateExerciseInRoutine);
routes.delete('/:id/routine/:day/:exerciseId',authMiddleware.isAuthenticatedMiddleware,middleware.validarIds,middleware.validarDayId,middleware.validarExerciseId,users.removeExerciseFromRoutine);


module.exports=routes;