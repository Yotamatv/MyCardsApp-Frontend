import jwtDecode from "jwt-decode";

const TOKEN = "token";
const FAILEDLOGINS = "FailedLogins";
const BANSTATUS = "BanStatus";
export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);
export const getToken = () => localStorage.getItem(TOKEN);
export const removeToken = () => localStorage.removeItem(TOKEN);

export const setLoginFailInLocalStorage = (counter) =>
  localStorage.setItem(FAILEDLOGINS, counter);
export const getFailedLogins = () => localStorage.getItem(FAILEDLOGINS);

export const setBanStatusInLocalStorage = (status) =>
  localStorage.setItem(BANSTATUS, status);
export const getBanStatus = () => localStorage.getItem(BANSTATUS);

export const getUser = () => {
  try {
    const myToken = localStorage.getItem(TOKEN);
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};
