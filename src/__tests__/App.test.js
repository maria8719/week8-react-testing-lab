import { render, screen, fireEvent, getByTestId, getByLabelText } from '@testing-library/react';
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
  // https://www.w3.org/TR/wai-aria/#role_definitions
  // note: we have two buttons so we have to be more specific and check for name
  const button = screen.getByRole('button', { name: 'this is a button' });
  expect(button).toBeInTheDocument();
});

// Test #2a
// this will not pass because there are multiple buttons
/*
test('check for 2nd button', () => {
  render(<App />); 
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
*/

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
  // https://github.com/testing-library/jest-dom#tohavestyle
  // note: You cannot assert external styles (unless using a transformer but is experimental)
  // https://www.npmjs.com/package/jest-transform-css
  expect(div).toHaveStyle({
    color: 'red'
  })    
});

// Test #5
test('button click caused color change', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change color' });
  // clicking the button:
  // https://testing-library.com/docs/dom-testing-library/api-events#fireevent
  fireEvent.click(button);
  // asserting button has new color:
  expect(button).toHaveStyle({
    backgroundColor: 'maroon'
  })
});

// Test #6
test('check box click causes button toggle disabled and color', () => {
  // check that button starts out enabled
  render(<App />);
  
  // check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change color' });
  expect(colorButton).toBeEnabled();

   // check out that button starts out with lime color
  expect(colorButton).toHaveStyle({
    backgroundColor: 'lime'
  });

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  expect(checkbox).not.toBeChecked();

  // click checkbox
  fireEvent.click(checkbox);

  // check that button is disabled
  expect(colorButton).not.toBeEnabled();

  // check that button color is now gray
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  });

  // click checkbox
  fireEvent.click(checkbox);

  // check that button is enabled
  expect(colorButton).toBeEnabled();

  // check that button color is now lime
  expect(colorButton).toHaveStyle({
    backgroundColor: 'lime'
  });

});
//***********************************************************Week 8 Lab****************************************************************************
 
//Check that the subscribe button is disabled when the page first loaded.

test("The subscribe button is disabled before typing anything in the input text box", () => {
    render(<App />);

    expect(screen.getByRole("button", {name: /subscribe/i})).toBeDisabled();
});

 //

 test('renders Terms link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Terms$/i);
  expect(linkElement).toBeInTheDocument();
});

 // Check the ul and li elements.

 test('Check the ul and li elements', () => {
  render(<App />); 

  const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');

  // Check the ul element should be in the document.
  expect(listElement).toBeInTheDocument();

  // Check the ul element should have a class named colors.
  
  expect(listElement).toHaveClass('colors');
  
  // Check that is exactly 5 list items in the ul element.
  expect(listItems.length).toEqual(5);
});