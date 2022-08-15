import axios from "axios";

export const api = axios.create({
  baseURL: "https://app-payme.herokuapp.com/",
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

export const getBill = async (token, billId) => {
  return api.get(`/bill/${billId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createBill = async (formData, token) => {
  await api.post("/bills", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTransaction = async (formData, billId, token) => {
  await api.put(`/bills/${billId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteBill = async (billId, token) => {
  await api.delete(`/bills/${billId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteThisAndFollowing = async (formData, billId, token) => {
  await api.post(`/bills/${billId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
