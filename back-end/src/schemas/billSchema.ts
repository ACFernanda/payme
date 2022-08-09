import joi from "joi";

export const createBillSchema = joi.object({
  title: joi.string().length(14).required(),
  dueDay: joi.number().integer().min(1).max(31).required(),
  dueMonth: joi.number().integer().min(1).max(12).required(),
  dueYear: joi.number().integer().min(1990).max(2100).required(),
  value: joi.string().required(),
  recurrence: joi.boolean().required(),
});

export const updateBillSchema = joi.object({
  dueDay: joi.number().integer().min(1).max(31).required(),
  dueMonth: joi.number().integer().min(1).max(12).required(),
  dueYear: joi.number().integer().min(1990).max(2100).required(),
  value: joi.string().required(),
  paid: joi.boolean().required(),
});
