const generateContainer = (notificationId, containerId, position) => {
  const containerDomNode = document.createElement("div");
  let rand;
  if (notificationId) {
    rand = notificationId;
  } else {
    rand = Math.floor(Math.random() * 100000 + 1);
  }
  containerDomNode.setAttribute("id", `app-notification-${rand}`);
  containerDomNode.setAttribute("class", "notification-mount-container");
  switch (position) {
    case "topLeft":
      containerDomNode.setAttribute(
        "style",
        "left: 20px;top:20px;position: absolute;animation: slideRight 200ms;"
      );
      break;
    case "topRight":
      containerDomNode.setAttribute(
        "style",
        "top: 20px;right: 20px;position: absolute;animation: slideLeft 200ms;"
      );
      break;
    case "bottomLeft":
      containerDomNode.setAttribute(
        "style",
        "left: 20px;bottom:20px;position: absolute;animation: slideLeft 200ms;"
      );
      break;
    case "bottomRight":
      containerDomNode.setAttribute(
        "style",
        "right: 20px;bottom:20px;position: absolute;animation slideLeft 200ms;"
      );
      break;
    default:
      containerDomNode.setAttribute(
        "style",
        "left: 20px;top:20px;position: absolute;animation: slideRight 200ms;"
      );
  }

  if (containerId) {
    document.getElementById(containerId).appendChild(containerDomNode);
  } else {
    document.body.appendChild(containerDomNode);
  }
  return { containerDomNode, rand };
};

export default generateContainer;
