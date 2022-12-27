import { renderHook, act } from "@testing-library/react";
import { useTransitionBanner, BannerItem } from "./index";

describe("test hook useTransitionBanner", () => {
  const mock: BannerItem[] = [
    {
      id: 1,
      banner: "",
      logoBanner: "",
      gifPoster: "",
      gifSrc: "",
      title: "",
      description: "",
      ctaText: "",
      icon: "",
      alt: "",
    },
    {
      id: 2,
      banner: "",
      logoBanner: "",
      gifPoster: "",
      gifSrc: "",
      title: "",
      description: "",
      ctaText: "",
      icon: "",
      alt: "",
    },
  ];
  it("should load initial banner item id with value 1", () => {
    const { result } = renderHook(() => useTransitionBanner(mock));

    expect(result.current.current.id).toBe(1);
  });

  it("should change banner item id to 2", () => {
    const { result } = renderHook(() => useTransitionBanner(mock));

    expect(result.current.current.id).toBe(1);

    act(() => {
      result.current.icons[1].onClick();
    });

    expect(result.current.current.id).toBe(2);
  });
});
