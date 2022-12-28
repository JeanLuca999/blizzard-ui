import { Button } from "components/Button";
import { render, screen } from "@testing-library/react";

describe("test Button scheme fill", () => {
  it("should render button with correct inner text", () => {
    render(
      <Button scheme="fill" iconSrc="url_to_icon">
        jogar agora
      </Button>
    );

    expect(screen.getByRole("button")).toHaveTextContent("jogar agora");
  });

  it("should render button with inner icon", () => {
    render(
      <Button scheme="fill" iconSrc="url_to_icon">
        jogar agora
      </Button>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should not render icon", () => {
    render(<Button scheme="fill">jogar agora</Button>);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});

describe("test Button scheme outlined", () => {
  it("should render button with correct inner text", () => {
    render(
      <Button scheme="outlined" iconSrc="url_to_icon">
        criar conta
      </Button>
    );

    expect(screen.getByRole("button")).toHaveTextContent("criar conta");
  });

  it("should render button with inner icon", () => {
    render(
      <Button scheme="outlined" iconSrc="url_to_icon">
        criar conta
      </Button>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should not render icon", () => {
    render(<Button scheme="outlined">criar conta</Button>);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
