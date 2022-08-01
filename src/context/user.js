import React, {useState} from "react";

const UserContext = React.createContext();

function UserProvider({children}){
    const [user, setUser] = useState(null);
    // const currentUser = {
    //     name:"Emma",
    //     interests:["Biking", "Coding"]
    // }
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}
export {UserProvider, UserContext}