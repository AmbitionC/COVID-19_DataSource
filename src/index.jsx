import React from 'react';
import ReactDOM from 'react-dom';

import OverallChina from './charts/overall_china.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <OverallChina />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));