import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import SelectableListForm from './SelectableListForm'

const selectableDays = [
  {data: '1 day', payload: 1},
  {data: '2 days', payload: 2},
  {data: '3 days', payload: 3},
  {data: '1 week', payload: 7},
  {data: '2 weeks', payload: 14},
  {data: '1 month', payload: 31},
  {data: '2 months', payload: 62},
];

const selectablePersons = [
  {data: '1 person', payload: 1},
  {data: '2 persons', payload: 2},
  {data: '3 persons', payload: 3},
  {data: '4 persons', payload: 4},
  {data: '5 persons', payload: 5},
  {data: '6 persons', payload: 6},
  {data: '7 persons', payload: 7},
  {data: '10 persons', payload: 10},
  {data: '15 persons', payload: 15},
  {data: 'over 15 persons', payload: 16},
];

const initialState = {
  text: '',
  minDay: {data: '', payload: ''},
  maxDay: {data: '', payload: ''},
  minPerson: {data: '', payload: ''},
  maxPerson: {data: '', payload: ''},
};

export default class AddTodo extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = initialState;
  }

  _handlePress = () => {
    this.props.onAddClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { minDay, maxDay, minPerson, maxPerson } = this.state;
    return (
      <View style={styles.container}>
        {/* Todo title form */}
        <View style={[styles.formField, { width: "100%" }]}>
          <TextInput
            style={[styles.inputField, { width: "100%" }]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Todo Title"
          />
        </View>
        {/* Required days form */}
        <View style={[styles.formField, { borderBottomWidth: 0, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }]}>
          <SelectableListForm
            style={{ flex: 3 }}
            selectableList={selectableDays}
            onPressAction={(minDay) => { this.setState({ minDay }); Actions.pop() }}
            title={"What is required minimum day"}
            selectedItem={minDay}
            defaultItem={'Required min day'}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>~</Text>
          </View>
          <SelectableListForm
            style={{ flex: 3 }}
            selectableList={selectableDays}
            onPressAction={(maxDay) => { this.setState({ maxDay }); Actions.pop() }}
            title={"What is required maximum day?"}
            selectedItem={maxDay}
            defaultItem={'Required max day'}
          />
        </View>
        {/* Required persons form */}
        <View style={[styles.formField, { borderBottomWidth: 0, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }]}>
          <SelectableListForm
            style={{ flex: 3 }}
            selectableList={selectablePersons}
            onPressAction={(minPerson) => { this.setState({ minPerson }); Actions.pop() }}
            title={"What is required minimum person"}
            selectedItem={minPerson}
            defaultItem={'Required min person'}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>~</Text>
          </View>
          <SelectableListForm
            style={{ flex: 3 }}
            selectableList={selectablePersons}
            onPressAction={(maxPerson) => { this.setState({ maxPerson }); Actions.pop() }}
            title={"What is required maximum person?"}
            selectedItem={maxPerson}
            defaultItem={'Required max person'}
          />
        </View>
        {/* Submit button */}
        <TouchableOpacity onPress={this._handlePress} style={styles.button}>
          <View style={styles.buttonText}>
             <Text>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: 150,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    minHeight: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formField: {
    alignItems: 'center',
    minHeight: 30,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  inputField: {
    height: 40,
  },
});
