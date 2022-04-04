# React Testing

The React Testing Library (created by Kent C. Dodds) is included Create-React-App (CRA). It abstracts over the <a href="https://testing-library.com/docs/dom-testing-library/intro">DOM Testing Library</a> that creates a virtual DOM for testing React components and provides utilities for interacting with the DOM. 

<strong>Note:</strong> This React boilerplate using <a href="https://create-react-app.dev/">CRA</a>, not Parcel.

## Jest-DOM

The <a href="https://testing-library.com/docs/ecosystem-jest-dom/">jest-dom library</a>  is a utility tool from the DOM Testing Library that provides extra Jest assertions to use in tests. 

The jest-dom provides two significant enhancements for Jest assertions. First, jest-dom provides over <a href="https://github.com/testing-library/jest-dom#custom-matchers">20 custom DOM matchers</a> that create more descriptive test code. Second, jest-dom also provides better context-specific error messages.

To run tests (in command-line):

```
npm test
```

## Unit Testing

A unit test tests one unit of code in isolation. It is generally used to test components or functions. For functions, unit tests are for input and output; for components, testing of props or the callback handlers communicating to the outside.

## RTL Setup

Assuming you are using <a href="https://create-react-app.dev/">CRA</a> for your React boilerplate, all the necessary packages are already installed and configured out of the box.

For every test you want to write, it needs to have .test in the file extension. 
The setup can either be:

  * ```__test__``` folders with a test file for each component 
  * ```__tests__``` folder with all test files for all the compoments. 

<strong>note:</strong>This project example has a ```__tests__ folder containing all test files.

## Testing a Component

For each test file (e.g. App.test.js), you include the ```render``` method and ```screen``` method which are from the DOM Testing Library which RTL uses as a wrapper. 

```
import { render, screen } from '@testing-library/react';
import App from './App';
```

Importing the component(s) to your test file is simulating the same effect as importing that compoment to be rendered to the browser. The React Testing Library (RTL) is simulating exactly the same process (importing to the DOM) as in your code for development.

We then write our test:

```JS
// string description with test function:
test('renders Hello World', () => {
  ...
  ...
  ...
});
```

This just defines our test block and description. But this is a 'passing' test because
it does not throw an error.

```JS
// string description with test function:
test('renders Hello World', () => {
  render(<App />);
  ...
  ...
});
```

Renders the ```<App />``` compoment and any children components it uses to the virtual DOM. Once it is rendered, it then can be tested (must be rendered first).

```JS
test('renders hello world', () => {
  render(<App />);
  const elemText = screen.getByText(/hello world$/i); 
  expect(elemText).toBeInTheDocument();
});
```

Finds a specific element inside of ```<App />``` via the <a href="https://testing-library.com/docs/queries/about/#screen">screen API</a> checking the text returned by using <a href="https://testing-library.com/docs/queries/bytext/">getByText</a> query method.

The ```/Hello World$/i``` that checks for the exact string (ignoring case) of "hello world".

So when you run ```npm test``` you will get this in your VSC terminal:

![test result](images/initial_test.png)

<strong>Note:</strong> Queries are the methods that Testing Library gives you to find elements on the page. There are several <a href="https://testing-library.com/docs/queries/about/">types of queries</a> ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. 

## Testing Library Functions

The RTL has a good many functions to test React compoments and takes time to understand how to use most of them. A good reference is the <a href="https://testing-library.com/docs/react-testing-library/cheatsheet">cheatsheet</a> provided on the website. 

## Additional Resources:

- <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ">https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ</a>

- <a href="https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/">https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/</a>