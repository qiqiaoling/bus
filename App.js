/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabBar from './TabBar.js'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar style={styles.container}></TabBar>

      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  }
});
