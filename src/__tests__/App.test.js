import { render, screen } from '@testing-library/react';
import App from '../App'; // root folder (src/App.js)

// Test #1
test('renders Hello World', () => { // test block and description
  // Rendering the App component (need to render before we can test):
  render(<App />);
  // Finding the element "Hello World" in the DOM
  // https://testing-library.com/docs/queries/bytext/
  // note: you can pass in regular expressions if you want
  // $ means end of the string; i means case insensitive:
  const elemText = screen.getByText(/hello world$/i); 
  // Assertion - expect the element to be in the document:
  // note: assertions always pass unless an error is thrown
  expect(elemText).toBeInTheDocument();
});

// Test #2
test('button has text of this is a button', () => {
  render(<App />); 
  // most elements have a built in aria role
  // https://www.w3.org/TR/html-aria/#docconformance
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

// Test #3
test('div has className of blue-div', () => {
  render(<App />); 
  // finding the button element:
  // https://testing-library.com/docs/queries/byrole/
  const div = screen.getByText(/this div is blue$/i);
  // asserting the div has className of blue-div':
  // https://github.com/testing-library/jest-dom#tohaveclass
  expect(div).toHaveClass('blue-div');
});

// Test #4
test('div has className of blue-div', () => {
  render(<App />); 
  const div = screen.getByText(/this div is blue$/i);
  // asserting the div has color style of red
  // note: You cannot assert external styles, only internal styles
  // https://github.com/testing-library/jest-dom#tohavestyle
  expect(div).toHaveStyle({
    color: 'red'
  })    
});