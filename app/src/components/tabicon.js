import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const TabIcon = props => (
  <View style={styles.container}>
    <Text
      style={
        props.selected ?
        styles.tebTextActive :
        styles.tabText
      }
    >
        {props.title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  tabText: {
    color: 'gray',
  },
  tabTextActive: {
    color: 'black',
  },
});

export default TabIcon;
