import React, { createContext, useContext, useState } from "react";
// import { data } from "../Api/services";

export const DataContext = createContext({
  props: {},
})

export const DataProvider = ({ children }) => {
  const [props, setProps] =     useState()  
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(T => T.json())
  .then(data =>()=>
    setProps(data)
  )  

  return (
    <DataContext.Provider   
      value={{   
        props
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <DataContextProvider")
  }
  return context
}