import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const signUp = async (formData) => {
  return api.post("/sign-up", formData);
};

export const signIn = async (formData) => {
  return api.post("/sign-in", formData);
};

export const getBills = async (token, month, year) => {
  let formattedMonth = "";

  if (month < 10) {
    formattedMonth = `0${month}`;
  } else {
    formattedMonth = month;
  }

  return api.get(`/bills/${formattedMonth}/${year}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
