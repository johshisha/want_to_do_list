import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

import { VisibilityFilters } from '../actions';

export default class Footer extends Component<[]> {
  _renderFilter = (filter, name) => {
    if (filter == this.props.filter) {
      return (
        <Text style={[styles.filters, {'fontWeight': 'bold'}]}>
          {name}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.filters, {color: 'blue'}]} onPress={() => this.props.onClick(filter)}>{name}</Text>
      );
    }
  }

  render() {
    const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;
    return (
      <View style={styles.container}>
        <Text style={{marginLeft: 20}}>Filter</Text>
        <View style={styles.filterContainer}>
          {this._renderFilter(SHOW_ALL, 'ALL')}
          {this._renderFilter(SHOW_COMPLETED, 'Complated')}
          {this._renderFilter(SHOW_ACTIVE, 'Active')}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filters: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#006060',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
