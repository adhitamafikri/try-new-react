import {
  useAlertState,
  useAlertDispatch,
  pushAlert as pushAlertAction,
  removeAlert as removeAlertAction,
} from "../contexts/Alert";

function useAlert() {
  const { alerts } = useAlertState();
  const alertDispatch = useAlertDispatch();

  const pushAlert = ({ type = "", text = "" }) => {
    pushAlertAction(alertDispatch, { type, text });
  };

  const removeAlert = ({ id = "" }) => {
    removeAlertAction(alertDispatch, { id });
  };

  return {
    alerts,
    pushAlert,
    removeAlert,
  };
}

export default useAlert;
