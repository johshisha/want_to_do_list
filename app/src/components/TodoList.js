import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends Component<[]> {
  render() {
    return (
      <View>
        {this.props.todos.map((todo, index) =>
          <TodoItem {...todo} key={index} onClick={() => this.props.onClick(index)} />
        )}
      </View>
    )
  }
}
