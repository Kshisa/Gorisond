import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';
import Card from './components/Card';
import './App.css';
import { Provider } from 'react-redux'

import store from './store'

class App extends Component {
render() {
  return (
      <Provider store={store}>
        <div className="App">
          <SimpleSlider />
          <Card />
        </div>
      </Provider>  
    );
  }
}

export default App;
