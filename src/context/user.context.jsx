import { onAuthStateChangedListener } from "../utilz/firsbase/firebase.utils";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser)
  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
    });
    // () => unsub()
  });

  return (
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
