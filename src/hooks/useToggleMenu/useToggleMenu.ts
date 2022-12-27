import { useState } from "react";

export function useToggleMenu() {
  const [show, setShow] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShow((prev) => !prev);
  };

  const handleHideMenu = () => {
    setShow(false);
  };

  const handleActiveMenu = () => {
    setShow(true);
  };

  return {
    isShowing: show,
    handleToggleMenu,
    handleHideMenu,
    handleActiveMenu,
  };
}
