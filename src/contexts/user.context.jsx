import { createContext, useState } from "react";

/* Este es el contexto como tal */
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null, /* REPASAR */    
});

/* Este es el componente que recibe el children y hace las cosas */
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    return  <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

