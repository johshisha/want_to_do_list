import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'

import { addTodo, clickTodo, changeFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Filter from '../components/Filter'

class Todo extends Component<{}> {
  render() {
    const { dispatch, visibleTodos, selectedFilter } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.addTodo}>
          <Text style={styles.welcome}>
            Todoを入力
          </Text>
          <AddTodo
            onAddClick={data => dispatch(addTodo(data))}
          />
          <Filter
            filter={selectedFilter}
            onClick={filter => dispatch(changeFilter(filter))}
          />
        </View>
        <View style={styles.todolist}>
          <ScrollView>
            <TodoList
              todos={visibleTodos}
              onClick={index => dispatch(clickTodo(index))}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  addTodo: {
    marginTop: 65,
    width: '100%',
    flex: 7,
  },
  todolist: {
    width: '100%',
    flex: 7,
    borderColor: 'gray',
    borderWidth: 1,
    // backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});

function selectTodos(todos, filter) {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.filters),
    selectedFilter: state.filters,
  }
}

export default connect(select)(Todo);
