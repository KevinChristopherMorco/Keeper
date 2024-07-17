import React from "react";
import swal from "sweetalert";

const SuccessfulAlert = () => {
  swal({
    title: "Changes saved!",
    icon: "success",
    closeOnClickOutside: false,
  });
};

const WarningAlert = (title, text, icon) => {
  swal({
    title: title,
    text: text,
    icon: icon,
    dangerMode: true,
    closeOnClickOutside: false,
  });
};

const DangerAlert = (
  firstPromiseTitle,
  secondPromiseTitle,
  promiseIcon,
  stopAction,
  handleFunction
) => {
  swal({
    title: firstPromiseTitle,
    text: "This action can't be undone!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    closeOnClickOutside: false,
  }).then((userAction) => {
    if (stopAction) {
      handleFunction();
      return;
    }
    if (userAction) {
      swal({
        title: secondPromiseTitle,
        icon: promiseIcon,
        closeOnClickOutside: false,
      });
      handleFunction();
    }
  });
};

export { SuccessfulAlert, DangerAlert, WarningAlert };
