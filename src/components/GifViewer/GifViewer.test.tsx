import { GifViewer } from "components/GifViewer";
import { render, screen } from "@testing-library/react";

describe("test GifViewer", () => {
  const posterUrl = "url_to_poster";
  const srcUrl = "url_to_src";

  it("should render poster/gif with correct source", () => {
    render(<GifViewer poster={posterUrl} src={srcUrl} />);

    expect(screen.getByAltText("preview")).toHaveAttribute("src", posterUrl);

    expect(screen.getByAltText("gif")).toHaveAttribute("src", srcUrl);
  });
});
