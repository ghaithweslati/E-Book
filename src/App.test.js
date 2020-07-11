import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should work without crashing", () => {
  // {current.type === "Admin" && <a href="/members">Members</a>}
  // {current.type === "Admin" && (
  const { debug } = render(<App />);
});
