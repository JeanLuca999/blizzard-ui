export const getDeviceName = (string: string) => {
  const linux = string.toLowerCase().includes("linux");
  const mac =
    string.toLowerCase().includes("iphone") ||
    string.toLowerCase().includes("mac");
  const windows = string.toLowerCase().includes("windows");

  if (linux) {
    return "Linux";
  }

  if (mac) {
    return "MacOS";
  }

  if (windows) {
    return "Windows";
  }

  return "";
};
