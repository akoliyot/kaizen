import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { sum } from "./helpers";

describe("Main tests", () => {
  it("should render the learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Secondary", () => {
  // https://jestjs.io/docs/en/api#2--testeachtablename-fn-timeout-
  // Q
  // Using a loop test the sum function from helpers.ts
  it.each`
    a    | b    | expected
    ${1} | ${2} | ${3}
    ${4} | ${5} | ${9}
  `("should return $expected when $a is added to $b", ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected);
  });
});
