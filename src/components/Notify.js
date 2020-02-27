import React, { useEffect } from "react";
import close from "../icons/close.svg";
import styles from "../index.css";
import info from "../icons/info.svg";
import error from "../icons/error.svg";
import success from "../icons/success.svg";
import warn from "../icons/warn.svg";

const Notify = ({
  description,
  type,
  closeIcon,
  width,
  id,
  className,
  onNotificationClick,
  onNotificationClose,
  title,
  subType,
  duration
}) => {
  const renderNotificationIcon = () => {
    const subTypes = ["error", "info", "success", "warn"];
    if (subTypes.includes(subType)) {
      if (subType === "error") src = error;
      else if (subType === "info") src = info;
      else if (subType === "success") src = success;
      else if (subType === "warn") src = warn;
      return (
        <div className={styles["notification-icon"]}>
          <img src={src} alt={subType} />
        </div>
      );
    } else return null;
  };

  const renderTitle = () => {
    if (type === "notification") {
      if (typeof title === "string")
        return <div className={styles["notification-title"]}>{title}</div>;
      else return title;
    }
    if (type === "message") return null;
  };

  const handleClose = () => {
    UnMountNotification(id);
    onNotificationClose(id);
  };

  const handleClick = () => {
    onNotificationClick(id);
  };

  const UnMountNotification = id => {
    const element = document.querySelector(`#app-notification-${id}`);
    if (element) element.parentNode.removeChild(element);
  };

  useEffect(() => {
    if (duration === 0) return;
    closeAfterTime(duration);
  }, []);

  const closeAfterTime = duration => {
    if (duration) {
      setTimeout(() => handleClose(id), duration);
    } else setTimeout(() => handleClose(id), 2000);
  };

  return (
    <div
      className={`${styles["notification-container"]}${
        className ? " " + className : ""
      }`}
      style={{ width: `${width}px` }}
      id={id}
    >
      <div className={styles["notification"]} onClick={handleClick}>
        {renderNotificationIcon()}
        <div className={styles["notification-title-desc"]}>
          {renderTitle()}
          {typeof description === "string" ? (
            <div className={styles["notification-desc"]}>{description}</div>
          ) : (
            description
          )}
        </div>
      </div>
      <button
        className={styles["close-notification"]}
        onClick={handleClose}
        id={id}
      >
        <img src={closeIcon ? closeIcon : close} alt='close' id={id} />
      </button>
    </div>
  );
};

export default Notify;
