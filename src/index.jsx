import React from 'react';
import ReactDOM from 'react-dom';

import { config } from './components/chart_1.jsx';

class Test extends React.Component {
  componentDidMount() {
    config();
  }

  render() {
    return (
      <React.Fragment>
        <div>Hello Work</div>
        <div id='c1'></div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));