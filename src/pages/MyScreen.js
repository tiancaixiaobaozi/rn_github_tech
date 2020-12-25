import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});