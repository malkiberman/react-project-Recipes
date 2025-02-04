import React, { createContext, useReducer, useState, Dispatch, ReactNode } from "react";
import userReducer, { UserData } from "../reduser/rreducerUser";

export type UserContextType = {
  user: UserData[];
  userDispatch: Dispatch<any>;
  currentUser: UserData | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null>|null>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const initialUser: UserData[] = [
    {
      id: 1,
      name: "sod",
      lname: "",
      email: "",
      password: "1234",
      addres: "", 
      phone: "",
    },
  ];

  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  console.log("User Context Initialized:", { user, currentUser });

  return (
    <UserContext.Provider value={{ user, userDispatch, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
