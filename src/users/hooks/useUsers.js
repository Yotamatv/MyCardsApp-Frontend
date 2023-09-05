import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import {
  editUser,
  getUserFromApi,
  login,
  signup,
} from "../services/usersApiService";
import {
  getFailedLogins,
  getUser,
  removeToken,
  setBanStatusInLocalStorage,
  setLoginFailInLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      if (getFailedLogins() >= "111") {
        requestStatus(false, "User Banned", null);
        setBanStatusInLocalStorage(true);
        return;
      }
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      setLoginFailInLocalStorage(getFailedLogins() + 1);
      requestStatus(false, error, null);
    }
  }, []);
  const handleGetUser = useCallback(async (id) => {
    try {
      const user = await getUserFromApi(id);
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);
  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);
  const handleSignup = useCallback(
    async (userFromTheClient) => {
      try {
        const normalizedUser = normalizeUser(userFromTheClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromTheClient.email,
          password: userFromTheClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [normalizeUser, handleLogin, requestStatus]
  );
  const handleEditUser = useCallback(async (userFromTheClient) => {
    try {
      const normalizedUser = normalizeUser(userFromTheClient);
      await editUser(normalizedUser);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);
  const value = useMemo(() => ({ isLoading, error, user }), [
    isLoading,
    error,
    user,
  ]);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleEditUser,
    handleGetUser,
  };
};

export default useUsers;
