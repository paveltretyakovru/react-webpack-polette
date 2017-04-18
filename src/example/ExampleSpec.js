// var React = require('react');
// var TestUtils = require('react-dom/test-utils'); //I like using the Test Utils, but you can just use the DOM API instead.
// var expect = require('expect');
// var Example = require('./Example'); //my root-test lives in components/__tests__/, so this is how I require in my components.

import React from 'react';
import Example from './Example';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom';

window.rctu = ReactTestUtils;

describe('Example', () => {
  let component;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(
      <Example option="Component example option" />
    );
  });
  
  it('should display the correct example option', () => {
    expect(ReactDOM.findDOMNode(component).textContent)
      .toMatch(/Hello, it's Example/);
  });

  it('should have "option" property', () => {
    expect(component).toBeDefined();
  });
    
});