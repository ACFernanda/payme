import joi from "joi";
import { CreateBillData } from "../repositories/billRepository.js";

export const createBillSchema = joi.object({
  title: joi.string().required(),
  dueDay: joi
    .string()
    .valid(
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    )
    .required(),
  dueMonth: joi
    .string()
    .valid(
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    )
    .required(),
  dueYear: joi
    .string()
    .pattern(/^\d{4}$/)
    .required(),
  value: joi.string().required(),
  recurrence: joi.boolean().required(),
});

export const updateBillSchema = joi.object({
  dueDay: joi
    .string()
    .valid(
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    )
    .required(),
  dueMonth: joi
    .string()
    .valid(
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    )
    .required(),
  dueYear: joi.string().required(),
  value: joi.string().required(),
  paid: joi.boolean().required(),
});
