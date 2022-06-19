import { useReducer, useContext } from "react";
import { createContext } from "react";

const initialState = {
  alerts: [], // <object[]>
};

function reducer(state, action) {
  const { alerts } = state;
  const { payload } = action;

  switch (action.type) {
    case "PUSH_ALERT_INFO":
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            ...payload,
            id: `alert-info-${new Date().getTime()}`,
            type: "info",
          },
        ],
      };
    case "PUSH_ALERT_ERROR":
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            ...payload,
            id: `alert-error-${new Date().getTime()}`,
            type: "error",
          },
        ],
      };
    case "REMOVE_ALERT":
      const filteredAlerts = alerts.filter((x) => x.id !== payload.id);
      return { ...state, alerts: [...filteredAlerts] };
    default:
      throw Error(`Unknown Action Type: ${action.type}`);
  }
}

export const AlertStateContext = createContext(null);
export const AlertDispatchContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
};

export function useAlertState() {
  const context = useContext(AlertStateContext);
  if (context === undefined) {
    throw new Error("useAlertState must be used inside AlertProvider");
  }

  return context;
}

export function useAlertDispatch() {
  const context = useContext(AlertDispatchContext);
  if (context === undefined) {
    throw new Error("useAlertDispatch must be used inside AlertProvider");
  }

  return context;
}

/**
 * Push alert
 * @param {string} payload.text - text to be shown in alert
 * @param {string} payload.type  - "info" | "error"
 */
export function pushAlert(dispatch, { text = "", type = "" }) {
  const payload = {
    text,
    type,
  };

  if (type === "error") {
    dispatch({ type: "PUSH_ALERT_ERROR", payload });
    return;
  }
  dispatch({ type: "PUSH_ALERT_INFO", payload });
}

/**
 * Remove alert
 * @param {string} payload.id - id of the alert
 */
export function removeAlert(dispatch, { id = "" }) {
  const payload = { id };
  dispatch({ type: "REMOVE_ALERT", payload });
}

export default AlertProvider;
