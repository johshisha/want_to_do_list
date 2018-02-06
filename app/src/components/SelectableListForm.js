import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SelectableListForm extends Component<{}> {
  render() {
    const { style, selectableList, onPressAction, title, selectedItem, defaultItem } = this.props;
    const { data, payload } = selectedItem;
    return (
      <View style={style}>
        <TouchableOpacity
          onPress={() => Actions.selectableList({
            list: selectableList,
            onPressAction: onPressAction,
            title: title
          })}
        >
          <View style={[styles.formField, { flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text style={(data) ? undefined : styles.placeholder}>{ data || defaultItem }</Text>
            <Text>></Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formField: {
    alignItems: 'center',
    minHeight: 30,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  placeholder: {
    color: 'gray',
  },
});
