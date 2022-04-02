# React Testing

The React Testing Library is included in the React App created by Create-React-App (CRA).
It is abstracted over react-dom and react-dom/test-utils as well as uses Jest as it's test environment.

To run tests (in command-line):

```
npm test
```

## Unit Testing

A unit test is generally used to test components or functions in isolation. For functions, unit tests are for input and output; for components, we test props or the callback handlers communicating to the outside.

## Setup

For every test you want to write, it needs to have .test in the file extension. Usually a __test__ folder is either created in a folder (per compoment) with a test file for each component OR a __tests__ folder is used to keep all the test files for all the compoments. Depends on how you want to architect your folder structure for your app.

## Testing a Component

For each test file (e.g. App.test.js), you normally would include the render and screen API from "@testing-library/react". Then also include whichever components you need to test for the unit test. 

```
import { render, screen } from '@testing-library/react';
import App from './App';
```

Importing the component(s) to your test file is simulating the same effect as importing that compoment to be rendered to the browser. The React Testing Library (RTL) is simulating exactly the same process (importing to the DOM) as in your code for development.

We then write our test:

```JS
test('renders Hello World', () => {
  render(<App />);
  ...
  ...
});
```

The code example above, it renders the ```<App />``` compoment and any children components it uses to the virtual DOM. Once it is rendered, it then can be tested.

```JS
test('renders Hello World', () => {
  render(<App />);
  const elemText = screen.getByText(/hello world$/i); 
  expect(elemText).toBeInTheDocument();
});
```

The updated code above finds a specific element inside of ```<App />``` via the <a href="https://testing-library.com/docs/queries/about/#screen">screen API</a> checking the text returned by using <a href="https://testing-library.com/docs/queries/bytext/">getByText</a> query method.

The ```/Hello World$/i``` that checks for the exact string (ignoring case) of "hello world".

So when you run ```npm test``` you will get this in your VSC terminal:

![test result](images/initial_test.png)

<strong>Note:</strong> Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. 

