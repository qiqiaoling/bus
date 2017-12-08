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

let bell_base64 = 'data:image/png;base64,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';

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
    				<Image source={{uri: bell_base64}} style={styles.iconRight} />
    			</View>
    		</View>
    		<View style={styles.carousel}>
    			<CarouselBox></CarouselBox>
    		</View>
    		<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  contentContainerStyle={styles.contentContainer}>
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
		width: 24,
    	height: 24,
    	resizeMode: Image.resizeMode.contain,
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