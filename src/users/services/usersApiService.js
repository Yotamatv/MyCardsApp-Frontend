import axios from "axios";

const apiUrl = "http://localhost:8181";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const editUser = async (normalizedUser) => {
  try {
    const { data } = await axios.put(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getUserFromApi = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/user`, id);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
