import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TodoItem extends Component<[]> {
  render() {
    const { text, completed, onClick } = this.props;
    return (
      <Text onPress={onClick} style={completed ? styles.doneItemText : styles.itemText}>{text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 22,
    margin: 10,
  },
  doneItemText: {
    fontSize: 22,
    margin: 10,
    textDecorationLine: 'line-through',
  },
});
