const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().min(2).max(255).required(),
    password: Joi.string().min(2).max(255).required(),
   
});

module.exports = schema;