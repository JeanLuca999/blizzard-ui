//IMAGES
import iphoneIcon from "assets/iphone-icon.svg";
import linuxIcon from "assets/linux-icon.svg";
import windowsIcon from "assets/windows-icon.svg";

import { getDeviceName } from "helpers";

export function useVerifyUserDevice(userAgent: string) {
  const deviceName = getDeviceName(userAgent);

  type devicesObject = {
    [key: string]: string;
  };
  const deviceIcons: devicesObject = {
    iphone: iphoneIcon,
    macos: iphoneIcon,
    linux: linuxIcon,
    windows: windowsIcon,
  };

  return {
    name: deviceName,
    icon: deviceIcons[deviceName.toLowerCase()] ?? "",
  };
}
