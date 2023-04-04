import BookingForm from "../Components/BookingForm";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

const times = [];

for (let i = 17; i <= 22; i++) {
  times.push(`${i}:00`);
}

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={times} />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

describe("Test submit button", () => {
  const dispatchMock = jest.fn();
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];

  it("should submit the form when the submit button is clicked", async () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const dateInput = screen.getByLabelText("Date");
    const timeSelect = screen.getByLabelText("Time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");

    fireEvent.change(dateInput, { target: { value: "2023-04-10" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    const submitButton = screen.getByText("Make your reservation");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledWith("12:00 PM");
    });
  });
});
