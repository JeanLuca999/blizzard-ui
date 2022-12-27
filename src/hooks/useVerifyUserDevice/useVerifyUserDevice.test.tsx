import { renderHook } from "@testing-library/react";
import { useVerifyUserDevice } from "./index";

describe("test hook useVerifyUserDevice", () => {
  const linuxDeviceString = "linux";
  const appleDeviceString = "iphone";
  const windowsDeviceString = "windows";

  it("should verify linux device", () => {
    const { result } = renderHook(() => useVerifyUserDevice(linuxDeviceString));

    expect(result.current.name.toLowerCase()).toBe("linux");
  });

  it("should verify apple device", () => {
    const { result } = renderHook(() => useVerifyUserDevice(appleDeviceString));

    expect(result.current.name.toLowerCase()).toBe("macos");
  });

  it("should verify windows device", () => {
    const { result } = renderHook(() =>
      useVerifyUserDevice(windowsDeviceString)
    );

    expect(result.current.name.toLowerCase()).toBe("windows");
  });
});
