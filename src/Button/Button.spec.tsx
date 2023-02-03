import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should be present in the document", () => {
    render(<Button>Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toBeTruthy();
  });
});
