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
import Footer from '../components/Footer'

class App extends Component<{}> {
  render() {
    const { dispatch, visibleTodos, selectedFilter } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.addTodo}>
          <Text style={styles.welcome}>
            Todoを入力
          </Text>
          <AddTodo
            onAddClick={text => dispatch(addTodo(text))}
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
        <View style={styles.footer}>
          <Footer
            filter={selectedFilter}
            onClick={filter => dispatch(changeFilter(filter))}
          />
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
    marginTop: 20,
    flex: 2,
    backgroundColor: 'red',
  },
  todolist: {
    width: '100%',
    flex: 8,
    backgroundColor: 'yellow',
  },
  footer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
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

export default connect(select)(App);