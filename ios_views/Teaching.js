import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';
import CarouselBox from './CarouselBox';
import { chaptersMap } from './chaptersMap';

class Teaching extends Component{
  constructor(props) {
    super(props);
    this.state = {
    	chapters: chaptersMap
    }
  }
  render(){
    return(
    	<View style={styles.container}>
    		<View style={styles.header}>
    			<View style={styles.left}>
    				<Text style={styles.textLeft}>通用型</Text>
    			</View>
    			<View style={styles.right}>
    				<Text style={styles.iconRight}>icon</Text>
    			</View>
    		</View>
    		<View style={styles.carousel}>
    			<CarouselBox></CarouselBox>
    		</View>
    		<ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
    			{this.state.chapters.map((chapter) => <Text style={styles.textlist} key={chapter.id}>{ chapter.name }</Text>)}
    		</ScrollView>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	header: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	left: {
		flex: 1,
		paddingLeft: 10,
	},
	textLeft: {
		fontSize: 16
	},
	right: {
		flex: 1,
	},
	iconRight: {
		alignSelf: 'flex-end',
		paddingRight: 10,
	},
	carousel: {
		height: 160,
		backgroundColor: 'yellow'
	},
	contentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
      	height: 50,
      	paddingLeft: 5,
      	paddingRight: 5,
    },
    textlist: {
    	marginLeft: 10,
    	marginRight: 10,
    	fontSize: 16,
    	fontWeight: 'bold',
    }
})

module.exports = Teaching;