import Joi from "joi";

const editCardSchema = {
  title: Joi.string()
    .min(2)
    .max(256)
    .required(),
  subtitle: Joi.string()
    .min(2)
    .max(256)
    .required(),
  description: Joi.string()
    .min(2)
    .max(256)
    .required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'Card "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'Card "mail" must be a valid mail' })
    .required(),
  web: Joi.string()
    .min(2)
    .max(256)
    .allow(""),
  url: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "Card image must be a valid url" })
    .allow(""),
  alt: Joi.string()
    .min(2)
    .max(256)
    .allow(""),
  state: Joi.string().allow(""),
  country: Joi.string()
    .min(2)
    .max(256)
    .required(),
  city: Joi.string()
    .min(2)
    .max(256)
    .required(),
  street: Joi.string()
    .min(2)
    .max(256)
    .required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
  id: Joi.string()
    .min(2)
    .max(256),
  user_id: Joi.string()
    .min(2)
    .max(256)
    .allow(""),
};

export default editCardSchema;
