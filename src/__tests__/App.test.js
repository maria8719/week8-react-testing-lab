import { render, screen } from '@testing-library/react';
import App from '../App'; // root folder (src/App.js)

// Test #1
test('renders Hello World', () => { // test block and description
  // Rendering the App component (need to render before we can test):
  render(<App />);
  // Finding the element "Hello World" in the DOM
  // note: ($ means end of the string; i means case insensitive):
  const elemText = screen.getByText(/Hello World$/i); 
  // Assertion - expect the element to be in the document:
  // note: assertions always pass unless an error is thrown
  expect(elemText).toBeInTheDocument();
});

// Test #2
test('button has correct color', () => {
  // rendering the App component:
  render(<App />); 
  // finding the button element:
  // https://testing-library.com/docs/queries/byrole/
  const button = screen.getByRole('button');
  // https://testing-library.com/docs/ecosystem-jest-dom/
  // https://github.com/testing-library/jest-dom#tohavestyle
  // asserting the button color:
  expect(button).toHaveStyle('color: blue');
});

