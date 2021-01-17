const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    mfd: Joi.date(),
    price: Joi.number().min(1).max(255).required(),
    perdayrent:Joi.number().min(1).max(255).required(),
   
});

module.exports = schema;