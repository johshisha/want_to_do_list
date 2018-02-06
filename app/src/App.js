import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Scene,
    Router,
} from 'react-native-router-flux';

import Todo from './containers/Todo';
import TabIcon from './components/tabicon';
import PageA from './components/PageA';
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
            <Scene key="todo" initial component={Todo} title="Todo" icon={TabIcon} />
            <Scene key="pageA" component={PageA} title="PageA" icon={TabIcon} />
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
