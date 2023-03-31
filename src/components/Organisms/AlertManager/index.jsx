import { useAlertHandlerContext } from "path/to/contexts/alert_handler";
import Alert from "../../Atoms/Alert/index";
import React, { useEffect } from "react";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.isActive == true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);
  return (
    <Alert
      alertMessage={AlertHandlerContext.alertMessage}
      isActive={AlertHandlerContext.isActive}
    />
  );
};

export default AlertManager;
