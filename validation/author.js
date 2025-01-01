const Joi = require('joi');

const validator = (schema) => (payload) => schema.validate(payload);

const authorSchema = Joi.object({
    name: Joi.string().required()
})

module.exports = validator(authorSchema);