import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/routeReducer';
import './App.css';
import TestComponent from './components/testComponent';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <TestComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
