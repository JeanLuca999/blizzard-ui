import { Banner, Icon } from "components/Banner";
import { render, screen } from "@testing-library/react";

describe("test Banner", () => {
  const title = "Diablo IV";
  const description =
    "O retorno de lilith traz uma era de escuridão e sofrimento";
  const ctaText = "Jogue agora";
  const icons: Icon[] = [
    { alt: "diablo-icon", icon: "", current: true, onClick: () => null },
  ];

  it("should render Banner with correct title", () => {
    render(
      <Banner
        title={title}
        description={description}
        ctaText={ctaText}
        banner=""
        logoBanner=""
        gifPoster=""
        gifSrc=""
        icons={icons}
      />
    );

    expect(screen.getByRole("heading").textContent).toBe(title);
  });

  it("should render Banner with correct description", () => {
    render(
      <Banner
        title={title}
        description={description}
        ctaText={ctaText}
        banner=""
        logoBanner=""
        gifPoster=""
        gifSrc=""
        icons={icons}
      />
    );

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("should render Banner with correct cta-text", () => {
    render(
      <Banner
        title={title}
        description={description}
        ctaText={ctaText}
        banner=""
        logoBanner=""
        gifPoster=""
        gifSrc=""
        icons={icons}
      />
    );

    expect(screen.getByText(ctaText)).toBeInTheDocument();
  });

  it("should render Banner with correct icons", () => {
    render(
      <Banner
        title={title}
        description={description}
        ctaText={ctaText}
        banner=""
        logoBanner=""
        gifPoster=""
        gifSrc=""
        icons={icons}
      />
    );

    expect(screen.getByAltText("diablo-icon")).toBeInTheDocument();
  });
});
