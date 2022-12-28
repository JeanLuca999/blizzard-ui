import { GamesList } from "components/GamesList";
import { screen, render } from "@testing-library/react";

describe("test GamesList", () => {
  const mockList = [
    { image: "", logo: "", name: "wow", category: "rpg" },
    { image: "", logo: "", name: "overwatch", category: "ação" },
    { image: "", logo: "", name: "hearthstone", category: "estratégia" },
  ];

  it("should render a list of items", () => {
    render(<GamesList list={mockList} />);

    expect(
      screen.getAllByRole("heading", { hidden: true, level: 3 }).length
    ).toBe(3);
  });

  it("should not render a list of items", () => {
    render(<GamesList list={[]} />);

    expect(
      screen.queryAllByRole("heading", { hidden: true, level: 3 }).length
    ).toBe(0);
  });
});
