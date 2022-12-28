import { Card } from "components/Card";
import { render, screen } from "@testing-library/react";

describe("test Card", () => {
  const category = "Ação em equipe";
  const image = "url";
  const logo = "url";
  const name = "Overwatch";

  it("should render card with correct background image and alt attribute", () => {
    render(<Card category={category} image={image} logo={logo} name={name} />);

    expect(screen.getAllByAltText(/overwatch/i)[0]).toBeInTheDocument();
  });

  it("should render card with correct logo image and alt attribute", () => {
    render(<Card category={category} image={image} logo={logo} name={name} />);

    expect(screen.getByAltText(/overwatch logo/i)).toBeInTheDocument();
  });

  it("should render card with correct title", () => {
    render(<Card category={category} image={image} logo={logo} name={name} />);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should render card with correct category text", () => {
    render(<Card category={category} image={image} logo={logo} name={name} />);

    expect(screen.getByText(category)).toBeInTheDocument();
  });
});
