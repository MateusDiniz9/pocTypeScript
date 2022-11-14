import joi from "joi";

export const movieSchema = joi.object({
  name: joi.string().required().trim(),
  platform: joi.string().required().trim(),
  genre: joi.string().required().trim(),
  status: joi.boolean(),
  sinopse: joi.string(),
});
