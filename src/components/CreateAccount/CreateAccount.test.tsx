import { CreateAccount } from "components/CreateAccount";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("test CreateAccount", () => {
  const mockOnClose = jest.fn();
  it("should call function when click on close button", () => {
    render(<CreateAccount onClose={mockOnClose} />);

    userEvent.click(screen.getByAltText("close-modal"));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
