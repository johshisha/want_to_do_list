import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import todoApp from './src/reducers';

let store = createStore(todoApp);

class ReactNativeReduxTodoApp extends Component<{}> {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('app', () => ReactNativeReduxTodoApp);
