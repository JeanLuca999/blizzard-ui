import { BattlenetAbout } from "components/BattlenetAbout";
import { render, screen } from "@testing-library/react";

describe("test BattlenetAbout", () => {
  it("should render custom button with correct device name", () => {
    render(<BattlenetAbout deviceName="Linux" deviceIcon="" />);

    expect(screen.getByText(/baixar para o linux/i)).toBeInTheDocument();
  });
});
