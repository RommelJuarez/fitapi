const { body,param, validationResult } = require('express-validator');
const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];


const validarIds = [
    param('id').isMongoId().withMessage('Invalid userId format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const validarExerciseId = [
    param('exerciseId').optional().isMongoId().withMessage('Invalid exerciseId format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const validarDayId = [
    param('day').isIn(validDays).withMessage('Invalid day of the week'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validarUpdateExercise = [
    param('userId').isMongoId().withMessage('Invalid userId format'),
    param('day').isIn(validDays).withMessage('Invalid day of the week'),
    body('oldExerciseId').isMongoId().withMessage('Invalid oldExerciseId format'),
    body('newExerciseId').isMongoId().withMessage('Invalid newExerciseId format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


const validarUpdateUser = [
    param('id').isMongoId().withMessage('Invalid ID format'),
    body('userName').optional().notEmpty().withMessage('userName cannot be empty'),
    body('firstName').optional().notEmpty().withMessage('firstName cannot be empty'),
    body('lastName').optional().notEmpty().withMessage('lastName cannot be empty'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
    
    (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ errors: [{ msg: 'The body is empty' }] });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const validarCreateUser = [
    
    body('userName').notEmpty().withMessage('userName cannot be empty'),
    body('firstName').notEmpty().withMessage('firstName cannot be empty'),
    body('lastName').notEmpty().withMessage('lastName cannot be empty'),
    body('email').isEmail().withMessage('Invalid email format'),
    body().notEmpty().withMessage('The body is empty'),
    (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ errors: [{ msg: 'The body is empty' }] });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { 
    validarIds,
    validarUpdateUser,
    validarUpdateExercise,
    validarDayId,
    validarExerciseId,
    validarCreateUser,

 };
