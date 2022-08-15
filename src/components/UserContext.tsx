import React, { createContext, PropsWithChildren, useReducer } from "react";

type ACTIONTYPE =
  | { type: "name"; payload: string }
  | { type: "email"; payload: string }
  | { type: "phone"; payload: string }
  | { type: "address"; payload: string }
  | { type: "reset"; payload: {} };

type TinitState = {
  email: string;
  phone: number;
  address: string;
};

const initialState = {
    name: "",
  email: "",
  phone: "",
  address: "",
};

export const UserContext = createContext<TinitState | {}>(initialState);

function reducer(state: typeof initialState, action: ACTIONTYPE): typeof state {
  switch (action.type) {
    case "name": 
    return { ...state, name: action.payload}
    case "email":
      return { ...state, email: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
