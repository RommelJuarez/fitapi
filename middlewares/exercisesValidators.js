const { body, param, validationResult } = require('express-validator');


const validarId = [
    param('id').isMongoId().withMessage('Invalid ID format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validarBodyExercise = [
    body('name').optional().isString().notEmpty().withMessage('Name is required'),
    body('description').optional().isString().notEmpty().withMessage('Description is required'),
    body('category').optional().isString().notEmpty().withMessage('Category is required'),
    
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
const validarBodyExerciseCreate = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('description').isString().notEmpty().withMessage('Description is required'),
    body('category').isString().notEmpty().withMessage('Category is required'),
    
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

module.exports = { validarId, validarBodyExercise,validarBodyExerciseCreate };
