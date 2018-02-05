import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class AddTodo extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  _handlePress = () => {
    this.props.onAddClick(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.button} onPress={this._handlePress}>追加</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    height: 40,
    width: 150,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 40,
    width: 50,
    padding: 10,
    margin: 5,
    color: 'green',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
