const Joi = require('@hapi/joi')
const registerSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    expertises: Joi.array().required(),
    tutoringDays: Joi.array().required(),
    tutoringHours: Joi.array().required(),
    aboutMe: Joi.required(),
    eduBackground: Joi.required(),
    monthlyRate: Joi.required(),
    achievement: Joi.required()
    // profile: Joi.binary().max(5000000).required(),
    // cv: Joi.binary().max(5000000).required()
});
const updateSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    expertises: Joi.array().required(),
    tutoringDays: Joi.array().required(),
    tutoringHours: Joi.array().required(),
    aboutMe: Joi.required(),
    eduBackground: Joi.required(),
    monthlyRate: Joi.required(),
    achievement: Joi.required()
    // profile: Joi.binary().max(5000000).required(),
    // cv: Joi.binary().max(5000000).required()
});
module.exports = {
    registerSchema,
    updateSchema
}