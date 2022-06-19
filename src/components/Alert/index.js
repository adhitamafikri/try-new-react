import React from "react";
import "./style.css";
import useAlert from "../../hooks/useAlert";

const RenderAlerts = React.memo(({ alerts = [] }) => {
  const { removeAlert } = useAlert();

  if (alerts.length) {
    return alerts.map((al, idx) => {
      return (
        <div
          className={`c-alert-item c-alert-item--${al.type}`}
          key={`alert-${al.type}-${idx}`}
        >
          <p className="c-alert-text">{al.text}</p>
          <div
            className="c-close-icon"
            onClick={() => removeAlert({ id: al.id })}
          >
            x
          </div>
        </div>
      );
    });
  }
});

const Alert = () => {
  const { alerts } = useAlert();
  return (
    <div className="c-alert">
      <RenderAlerts alerts={alerts} />
    </div>
  );
};

export default React.memo(Alert);
