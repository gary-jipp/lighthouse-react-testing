# Unit & Integration Testing

- [ ] Types of testing
- [ ] Tools for testing React
- [ ] Structure of Tests
- [ ] Unit Testing
- [ ] Testing functions
- [ ] Test Coverage
- [ ] Testing React Components
- [ ] Searching for Elements
- [ ] Search Methods & Priority
- [ ] Interacting with Components
- [ ] Integration Testing
- [ ] Mocking functions / modules


### Types of Testing
 - unit == function
 - Integration, more than 1 unit (function)
 - interoperability of function
 - spectrum => 2 units:  2, 3, 4......... -> all (application)
 - Unit ................ E2E (end to end) A-Z
 - static - linting
 - regression testing

* unit - testing the smallest piece of the app (function)
* integration - testing pieces working together
* end-to-end - testing the app the way a user would use it
* regression testing - making sure new changes didn't break * existing features

 ### Testing Tools
 - Mocha : Test Runner
 - Chai: Assertion Library
 - Jest:  Test Runner: popular!
 - Add on Libraries to Jest

 ### Testing Components
 - (React) Testing Library
 - add on to Jest - functions!
 - life cycle of a component test
  - render() component
  - verify stuff is there that you expect
  - search for element
  - interact with that element
  - verify stuff is there that you expect




## Tools for Testing React
- Jest - test runner
- Testing Library
- React Testing Library

### Jest

* Jest - test runner (similar to mocha, can use instead of mocha for any code)
 - look at package.json. Jest is already installed
 - why does React favor Jest?  Both are developed  by facebook - check github
 - https://jestjs.io/
 - getting started
 - looks a lot like Mocha!
 - API -> Expect + something

-  https://reactjs.org/docs/testing-recipes.html

### Testing Library for React

- https://testing-library.com

- [ ] Queries - get, find, query
- https://testing-library.com/docs/queries/about/

- [ ] What query to use? - Priority
- https://testing-library.com/docs/queries/about/#priority


- https://testing-library.com/docs/guiding-principles/

- [ ] List of "Roles"
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles
