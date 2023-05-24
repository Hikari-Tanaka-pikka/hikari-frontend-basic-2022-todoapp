import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    isActive: false,
    alertMessage: "",
  });

  const setAlert = (alertMessage) => {
    setAlertState({ isActive: true, alertMessage: alertMessage });
  };

  const closeAlert = () => {
    setAlertState({ isActive: false, alertMessage: alertState.alertMessage });
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
