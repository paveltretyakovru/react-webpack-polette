import React, {Component} from 'react';

class ExampleComponent extends Component {

  constructor(props) {
    super(props);

    this.displayName = 'Example component';
  }

  render() {
    return(
      <div>
        Hello, it's ExampleComponent
      </div>
    );
  }
}

export default ExampleComponent;