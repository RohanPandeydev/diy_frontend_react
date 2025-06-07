import React from "react";
import { createContext, useContext } from "react";
import StorageData from "../helper/storagehelper/StorageData";

const userContext = createContext();
const ContextWrapper = ({ children }) => {
 
  return (
    <userContext.Provider
      value={false}
    >
      {children}
    </userContext.Provider>
  );
};


const useCustomContext = () => {
  return useContext(userContext);
};
export default useCustomContext;
export { ContextWrapper };
