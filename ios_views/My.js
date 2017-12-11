import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Dimensions,
  TouchableHighlight
  } from 'react-native';
import {StackNavigator} from 'react-navigation';

let arrowRight = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAG90lEQVR4Xu2decinUxTHP2NfsmVJtpQsKVnyh+x/jG0sjT27se+RnYiyRiR7iRhEItm3aSyhaaRoBkUzFIZiiFGI6NvcaZbmfe55xuR9zj3n/vs7z++95/v9vud3n3PuPXcMOUIjMCa09+k8KYDgIkgBpACCIxDc/YwAKYDgCAR3PyNACiA4AsHdzwiQAgiOQHD3MwKkAIIjENz9jAApgOAIBHc/I0AKIDgCwd3PCJACCI5AcPczAqQAgiMQ3P2MACmA4AgEdz8jQArAHQITgHHAccDv7mY/sAl7iwDnA7cXDCcB44E5A8PU1XS8CEDzvAa4ehF0p5RoMNsV6gOarAcBLFP+688bAbdpwN7ArAHh6mYqHgTwAHByBdEZwFhgphvkBzJRDwI4DHgcWL6CmSLAXsD0gWDrYhoeBCAg9wGeAVapoKq1wL7AVBfoD2CSXgQgqHYGXgLWqOCmt4KDgMkDwHfwU/AkAIG5LfAasF4F2T+AI4DnBs/AKE/QmwAE1+bAG8AmFez+BpQ0mjjKGA/6z3sUgADdCHgd2MqArl4f7zTYhTTxKgCRtS7wCrCDgTklkK4D/jHYhjLxLAARpQWhfud3N7CmFPKFKYKFkfIuAHmzMvAUsL9BBA8BpwF/GWxDmLQgABGlJNHDwFEG1pRPOBrQm0L40YoAROSywF3AGQZWtYA8GPjNYNu0SUsCEFHy53rgcgNr75efjZ8Mts2atCaAeURdAtxsYO3jkmb+zmDbpEmrAhBZWuzdV6JCF3lflCLSl00yXHGqZQHI9SOBR4HlKjh8U/YUfBJNBK0LQHzuBzxdXhe7+P2xVBI/iCSCCAIQn7sBLwCrV8j9tVQS34wigigCEJ9KGSt1rBRy11B+4HDg+QgiiCQA8bllKSJtXCFXlcQTgMdaF0E0AYhPlZGVCNqiQq4KR+cA97QsgogCEJ/aUPIqsJ2B3CuBG1stIkUVgHhfsywMdzGI4FZAyaXmysmRBSDetclUr4jaSFob2p6uOoPWB82M6AIQkSuUZJFW/rWhsvOxwJ81Qy+fpwDmMqVKotLGpxiI09rh0FYqiSmA+YwLCxWQLjaI4L1SSfzZYDtokxTAwvQIj8uAGwysfVQqid8bbAdrkgJYPDVnAncbKomfl0riV4NluDKxFMDIAGnb2CNlfdAF49dFBJ95FEEKoJu1A8qG05Uq5P5Qfg4+9CaCFECdsT1KYWi1iukvwIHA2/WvHI5FCsDGxY6lkrh2xVw9i/SKqEOsLkYKwE7T1uVg6oaVR3TmQA2snrB/9ehZpgD6Yb9pOZi6WeUx1Qz0JnF/v6///61TAP0xX79Egm0Mj2p7+k0Gu1EzSQH0h76PAJRUsmxP7z+LpfRECqAfkPkT0A+vpqy1CNROog1yEdgUryZn8jXQBFObRnuWHgSWRJAyh+94giHXAN1sKbOnTSArVkjNVLAn1RvnmsUgI1AtmmU5uEVWDT7lhhADSK2a9NkS9i6gBV9uCWtEDdoUei9wqsEfnS9UA+sm2svkW8DcbeHqJqrWsrWR28JrCDn7PA+GOCNsaU5XTSbVM2BXw5feAlyaR8MMSDkx0eFQ/ZZvb5jvFaWk29y5QPkecQ3Q53j42WVxaNCJT5NoAlBPALWatzSIOL5cVeOTWeOsIwlA4V7n+motYrSxUwdFtT5ofkQRgBZ6LxqbRKkA9FbzzBcHIwhAZ//VIFpdxbtGtolrUPUK5Wr0VLtyTo0ideXcpw1i0OlSyxFAZ/21LVs3j3aNbBXboOovApS8qY1sFl1DyNnnimi6G0jJm9rIdvGNJYIU6nU72Fk15svBjkNaqegZ/B3RpJU1gBZ5ug/oGAMY6gomu7wyppEIoNe7J8vR7Br/DwKn56VR82HyHgG0VVvXxmnrdm3cBmhx2GRRp+b8SJ97FsA6wMuADm3UxlXlLqEkfxGkvApAZ/R1ibSOa9XGueU2sZpdyM89CkBn81XR00HNrqGWrieWLqAhybU47U0AOpOv/3wd0e4aeX28hX1nbwE7ld47a1V8m1OufZlsxCC0mZcIMBZ4Fli1wtbs0vl7amhWezjvQQC64lUNl7R9u2t8W65+m97D//CmHgSg5M2EClMzAEWJmeEZ7QmABwEox39Hub9nce5NK//5s3r6nuaOFoES6rWAEjoLjinAOEC//TmWAAEPEWBBty4AlNLVmASMB7Tqz7GECHgTgNw8qVwHq6tbsqK3hMTPe8yjAP6jy/n4ggikAILrIQWQAgiOQHD3MwKkAIIjENz9jAApgOAIBHc/I0AKIDgCwd3PCJACCI5AcPczAqQAgiMQ3P2MACmA4AgEdz8jQAogOALB3c8IkAIIjkBw9zMCpACCIxDc/YwAKYDgCAR3/18EMuqBt49zzAAAAABJRU5ErkJggg==';
class HomeScreen extends React.Component {

    render() {
      return(
        <View style={styles.container}>
          <Text>王老师</Text>
          <Text>LV1洋葱认证教师</Text>
          <Text>邀请更多学生加入班级可以升级</Text>
          <View style={styles.borderContent}>
            <View style={styles.navText}>
              <Text>0</Text>
              <Text>学生</Text>
            </View>
            <View style={styles.navText}>
              <Text>1</Text>
              <Text>班级</Text>
            </View>
            <View style={styles.navText}>
              <Text>151</Text>
              <Text>掌握知识</Text>
            </View>
            <View style={styles.navText}>
              <Text>151</Text>
              <Text>掌握知识</Text>
            </View>
          </View>

          <TouchableHighlight style={styles.linkList}
            underlayColor='white'
            onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
          >
            <View style={styles.linkBox}>
              <View style={styles.leftName}>
                <Text style={styles.fontSize}>个人资料</Text>
              </View>
              <View style={styles.rightIcon}>
                <Image source={{uri: arrowRight}} style={styles.iconRight} />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.linkList}
            underlayColor='white'
            onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
          >
            <View style={styles.linkBox}>
              <View style={styles.leftName}>
                <Text style={styles.fontSize}>使用指南</Text>
              </View>
              <View style={styles.rightIcon}>
                <Image source={{uri: arrowRight}} style={styles.iconRight} />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
}

class MyProfileScreen extends React.Component {


    render() {
      return(
        <View style={styles.container}>
          <Text>姓名</Text>
          <Text>手机</Text>
          <Text>邮箱</Text>
        </View>
      );
    }
}

const My = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
    navigationOptions: {
      headerTitle: '个人资料'
    }
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  borderContent: {
    flexDirection: 'row',
  },
  navText: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderColor: '#ebebeb',
    borderWidth: 1/PixelRatio.get(),
  },
  linkList: {
    padding: 10,
    marginTop: 10,
  },
  linkBox: {
    flexDirection: 'row',
  },
  leftName: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  fontSize: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  iconRight: {
    alignSelf: 'flex-end',
    width: 24,
      height: 24,
      resizeMode: Image.resizeMode.contain,
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
})


module.exports = My;
