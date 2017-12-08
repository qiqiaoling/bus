import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Carousel from 'react-native-carousel';


class CarouselBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel width={375}>
        <View style={styles.container}>
          <Text style={styles.textBox}>Page 1</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textBox}>Page 2</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textBox}>Page 3</Text>
        </View>
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textBox: {
    color: 'red',
  }
});

module.exports = CarouselBox;