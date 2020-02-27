import NotifySubCtrl from "./NotifySubCtrl";
import generateContainer from "../utils/containerGen";

const notification = {
  success: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose,
      duration
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose,
      duration
    );
    notifySubCtrl.success(containerDomNode, rand);
  },

  error: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose,
      duration
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose,
      duration
    );
    notifySubCtrl.error(containerDomNode, rand);
  },

  info: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose,
      duration
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose,
      duration
    );
    notifySubCtrl.info(containerDomNode, rand);
  },

  warn: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose,
      duration
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose,
      duration
    );
    notifySubCtrl.warn(containerDomNode, rand);
  },

  openNotification: config => {
    const {
      title,
      description,
      type,
      className,
      width,
      position,
      notificationId,
      containerId,
      onNotificationClick,
      onNotificationClose,
      duration
    } = config;
    const { containerDomNode, rand } = generateContainer(
      notificationId,
      containerId,
      position
    );
    const notifySubCtrl = new NotifySubCtrl(
      title,
      description,
      type,
      className,
      width,
      onNotificationClick,
      onNotificationClose,
      duration
    );
    notifySubCtrl.openNotification(containerDomNode, rand);
  },

  closeNotification: id => {
    const element = document.querySelector(`#app-notification-${id}`);
    if (element) element.parentNode.removeChild(element);
  }
};

export default notification;
