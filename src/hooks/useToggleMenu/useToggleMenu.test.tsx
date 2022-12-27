import { renderHook, act } from "@testing-library/react";
import { useToggleMenu } from "./index";

describe("test hook useToggleMenu", () => {
  it("should render initial state as false", () => {
    const { result } = renderHook(() => useToggleMenu());

    expect(result.current.isShowing).toBe(false);
  });

  it("should toggle initial state from false to true", () => {
    const { result } = renderHook(() => useToggleMenu());

    expect(result.current.isShowing).toBe(false);

    act(() => {
      result.current.handleToggleMenu();
    });

    expect(result.current.isShowing).toBe(true);
  });

  it("should toggle state to true then return to false", () => {
    const { result } = renderHook(() => useToggleMenu());

    expect(result.current.isShowing).toBe(false);

    act(() => {
      result.current.handleToggleMenu();
    });

    expect(result.current.isShowing).toBe(true);

    act(() => {
      result.current.handleHideMenu();
    });

    expect(result.current.isShowing).toBe(false);
  });
});
