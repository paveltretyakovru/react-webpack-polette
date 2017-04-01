import React from 'react/lib/ReactWithAddons';
import ReactDOM from 'react-dom';
import ExampleComponent from './ExampleComponent';

let TestUtils = React.addons.TestUtils;

describe('ExampleComponent', () => {
  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <ExampleComponent option="Component example option" />
    );
  });
  
  it('should display the correct example option', () => {
    expect(ReactDOM.findDOMNode(component).textContent)
      .toMatch(/Hello, it's ExampleComponent/);
  });
    
});