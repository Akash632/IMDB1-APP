import React,{createContext,useState} from 'react';

export const UserContext = createContext();

export const UserProvider =({ children }) =>{
 
   const[movieId, setMovieId]= useState("");
   const[type,setType]=useState("");
   const[searchBar,setSearchBar]=useState("");


return(
    <UserContext.Provider value={{movieId, setMovieId,type,setType,searchBar,setSearchBar}}>
        {children}
    </UserContext.Provider>
);
};