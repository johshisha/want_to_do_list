import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Scene,
    Router,
} from 'react-native-router-flux';

import Todo from './containers/Todo';
import RegisteredTodo from './containers/RegisteredTodo';
import TabIcon from './components/tabicon';
import SelectableListScene from './components/SelectableListScene';

export default class App extends Component<[]> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar" tabs
            tabBarStyle={styles.tabBar}
            tabSceneStyle={{flex: 10}}
          >
            <Scene key="add" initial component={Todo} title="Add Todo" icon={TabIcon} />
            <Scene key="registered" component={RegisteredTodo} title="Registered Todo" icon={TabIcon} />
          </Scene>
          <Scene
            key="selectableList"
            component={SelectableListScene}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.title}
          />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#c3ffb7',
  },
  navBar: {
    backgroundColor: '#132D3D',
  },
});
