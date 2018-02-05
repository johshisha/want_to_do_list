import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class PageA extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>PageA</Text>
          <Text style={styles.linkText}>Link</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});