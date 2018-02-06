import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TodoItem extends Component<[]> {
  render() {
    const { text, minDay, maxDay, minPerson, maxPerson, completed, onClick } = this.props;
    return (
      <View>
        <Text onPress={onClick} style={completed ? styles.doneItemText : styles.itemText}>{text}</Text>
        <Text>MinDay: {minDay.data}, MaxDay: {maxDay.data}</Text>
        <Text>minPerson: {minPerson.data}, maxPerson: {maxPerson.data}</Text>
      </View>
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
