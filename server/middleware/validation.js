const { validationResult, body } = require('express-validator');

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      errors: errors.array(),
      error: {
        message: 'INVALID_DATA',
        code: 400,
      },
    });
  };
};

const validScheme = {
  name: body('email').notEmpty().trim().isString().isLength({ min: 2 }),
  email: body('email').notEmpty().trim().isEmail(),
  password: body('password').notEmpty().trim().isLength({ min: 8 }),
  passwordConfirm: body('passwordConfirm').custom((value, { req }) => {
    return value === req.body.password;
  }),
};

module.exports = {
  validate,
  validScheme,
};
