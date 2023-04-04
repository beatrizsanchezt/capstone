import { render, screen } from "@testing-library/react";
import App, { updateTimes } from "../App";

test("App renders restaurant name", () => {
  render(<App />);
  const headerElement = screen.getByText("Little Lemon", { selector: "h1" });
  expect(headerElement).toBeInTheDocument();
});

describe("updateTimes", () => {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  it("removes the specified time from the array", () => {
    const updatedTimes = updateTimes(times, "19:00");
    expect(updatedTimes).not.toContain("19:00");
  });

  it("returns the same array if the specified time is not found", () => {
    const updatedTimes = updateTimes(times, "23:00");
    expect(updatedTimes).toEqual(times);
  });
});
