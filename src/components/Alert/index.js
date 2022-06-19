import React from "react";
import "./style.css";
import useAlert from "../../hooks/useAlert";

const RenderAlerts = ({ alerts = [] }) => {
  if (alerts.length) {
    return alerts.map((al, idx) => {
      return (
        <div
          className={`c-alert-item c-alert-item--${al.type}`}
          key={`alert-${al.type}-${idx}`}
        >
          {al.text}
        </div>
      );
    });
  }
};

const Alert = () => {
  const { alerts } = useAlert();
  return (
    <div className="c-alert">
      <RenderAlerts alerts={alerts} />
    </div>
  );
};

export default React.memo(Alert);
