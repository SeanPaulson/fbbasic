// import { useState, createContext } from "react";

// const AuthContext = createContext('');
// const { Provider } = AuthContext;

// type Props = {
//   children?: React.ReactNode;
// }

// const AuthProvider = ({ children }: Props) => {
//   const [authState, setAuthState] = useState({
//    token: "",
//   });

//   const setUserAuthInfo = ({ data }) => {
//    const token = localStorage.setItem("token", data.data);

//    setAuthState({
//     token,
//    });
//  };

//  // checks if the user is authenticated or not
//  const isUserAuthenticated = () => {
//   if (!authState.token) {
//     return false;
//   }
//  };

//  return (
//    <Provider
//      value={{
//       authState,
//       setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
//       isUserAuthenticated,
//     }}
//    >
//     {children}
//    </Provider>
//  );
// };

// export { AuthContext, AuthProvider };