import { Menu } from "components/Menu";
import { render, screen } from "@testing-library/react";
import { MenuMocks } from "mocks";

describe("test Menu scheme games", () => {
  it("should render menu with a list of items", () => {
    render(
      <Menu
        scheme="games"
        isActive={true}
        list={MenuMocks.gamesItems}
        footerList={[]}
      />
    );

    expect(screen.getAllByRole("img", { hidden: true }).length).toBe(
      MenuMocks.gamesItems.length
    );
  });

  it("should not render a menu with a list of items", () => {
    render(<Menu scheme="games" isActive={true} list={[]} footerList={[]} />);

    expect(screen.queryAllByRole("img", { hidden: true }).length).toBe(0);
  });

  it("should render items in menu footer", () => {
    render(
      <Menu
        scheme="games"
        isActive={true}
        list={[]}
        footerList={MenuMocks.footerGamesList}
      />
    );

    expect(screen.getAllByRole("img", { hidden: true }).length).toBe(
      MenuMocks.footerGamesList.length
    );
  });
});

describe("test Menu scheme esports", () => {
  it("should render menu with a list of items", () => {
    render(
      <Menu
        scheme="esports"
        isActive={true}
        list={MenuMocks.esportsItems}
        footerList={[]}
      />
    );

    expect(screen.getAllByRole("img", { hidden: true }).length).toBe(
      MenuMocks.esportsItems.length
    );
  });

  it("should not render a menu with a list of items", () => {
    render(<Menu scheme="esports" isActive={true} list={[]} footerList={[]} />);

    expect(screen.queryAllByRole("img", { hidden: true }).length).toBe(0);
  });

  it("should render items in menu footer", () => {
    render(
      <Menu
        scheme="esports"
        isActive={true}
        list={[]}
        footerList={MenuMocks.footerEsportsList}
      />
    );

    expect(screen.getAllByRole("img", { hidden: true }).length).toBe(
      MenuMocks.footerEsportsList.length
    );
  });
});
