import joi from "joi";
export var movieSchema = joi.object({
    name: joi.string().required().trim(),
    platform: joi.string().required().trim(),
    genre: joi.string().required().trim(),
    status: joi.string().trim(),
    sinopse: joi.string().trim()
});
