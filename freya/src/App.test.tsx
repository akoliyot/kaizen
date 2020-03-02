import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Main tests', () => {
  it('should render the learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

const sum = (a: number, b: number) => a + b;

describe('Secondary', () => {
  it.each`
      a | b | expected
      ${1}   ${1}   ${2}
      ${5}   ${8}   ${13}
      ${7}   ${21}  ${28}
    `('returns $expected when $a is added to $b', ({a, b, expected}) => {
    let result = sum(a, b);
    expect(result).toBe(expected);
  });
});