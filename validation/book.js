const Joi = require('joi');

const validator = (schema) => (payload) => schema.validate(payload);

const bookSchema = Joi.object({
    name: Joi.string().required()
})

module.exports = validator(bookSchema);