import { Header } from "components/Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("test Header", () => {
  const mockGamesMenuOnClick = jest.fn();
  const mockEsportsMenuOnClick = jest.fn();
  const mockLoginMenuOnClick = jest.fn();

  it("should call function gamesMenuOnClick", () => {
    render(
      <Header
        isGamesMenuActive={false}
        isEsportsMenuActive={false}
        gamesMenuOnClick={mockGamesMenuOnClick}
        esportsMenuOnClick={mockEsportsMenuOnClick}
        loginMenuOnClick={mockLoginMenuOnClick}
      />
    );

    userEvent.click(screen.getByText(/jogar/i));
    expect(mockGamesMenuOnClick).toBeCalled();
  });

  it("should call function esportsMenuOnClick", () => {
    render(
      <Header
        isGamesMenuActive={false}
        isEsportsMenuActive={false}
        gamesMenuOnClick={mockGamesMenuOnClick}
        esportsMenuOnClick={mockEsportsMenuOnClick}
        loginMenuOnClick={mockLoginMenuOnClick}
      />
    );

    userEvent.click(screen.getByText(/esportes/i));

    expect(mockEsportsMenuOnClick).toBeCalled();
  });

  it("should call function loginMenuOnClick", () => {
    render(
      <Header
        isGamesMenuActive={false}
        isEsportsMenuActive={false}
        gamesMenuOnClick={mockGamesMenuOnClick}
        esportsMenuOnClick={mockEsportsMenuOnClick}
        loginMenuOnClick={mockLoginMenuOnClick}
      />
    );

    userEvent.click(screen.getByText(/logar/i));

    expect(mockLoginMenuOnClick).toBeCalled();
  });
});
