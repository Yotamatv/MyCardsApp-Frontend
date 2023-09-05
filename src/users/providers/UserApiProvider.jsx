import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { node } from "prop-types";
import { getUserFromApi } from "../services/usersApiService";
import { useUser } from "./UserProvider";

const UserApiContext = createContext();

export default function UserApiProvider({ children }) {
  const { user } = useUser();
  const [userApi, setUserApi] = useState();

  useEffect(() => {
    if (user) {
      const getData = async () => {
        return await getUserFromApi(user.id);
      };
      if (!userApi) {
        const userFromApi = getData();
        userFromApi.then((result) => {
          setUserApi(result);
        });
      }
    }
  }, [userApi]);

  return (
    <UserApiContext.Provider value={userApi}>
      {children}
    </UserApiContext.Provider>
  );
}

export const useUserApi = () => {
  const context = useContext(UserApiContext);
  return context;
};

UserApiProvider.propTypes = {
  children: node.isRequired,
};
