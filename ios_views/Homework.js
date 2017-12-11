import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  View
  } from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '作业',
    };

    render() {
      return(
        <View style={styles.container}>
          <Text>Homework这是内容部分</Text>
        </View>
      );
    }
}

const Homework = StackNavigator({
    Home: {screen: HomeScreen},
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})


module.exports = Homework;
