import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilz/firsbase/firebase.utils";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
    });
  });

  return (
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
