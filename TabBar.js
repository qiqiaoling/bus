import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Teaching from './ios_views/Teaching';
import Homework from './ios_views/Homework';
import TheClass from './ios_views/TheClass';
import My from './ios_views/My';

let teaching_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUAAAAAAAAAAABVVVU/Pz8zMzMqKiokJEgfPz84ODgzMzMuLkUqKj8nOjo2NjYzMzMvLz8tPDwqODg1NTUzMz8wMDwuOTksNzcqNTUyMj0xMTovODgtNjYrND0zMzsxMTkvNzcuNj0tNDwrMjoxMTgwNzcuNTwtNDosMzkxNzcwNjwvNTsuNDktMjgsNzcwNjsvNTouNDktMjgtNzwxNTowNDkvMzguMjwtNjsxNTowNDkvMzguMzstNjotNTkwNDgvMzsvNjouNjktNTkwNDgwMzsvNjouNTkuNTgtNDswMzovNjkuNTkuNDstNDowMzovNjkvNTguNDsuNDotMzkwNjkvNTsuNDouNDktMzkwNTgvNTovNDouNDkuNjgwNTsvNTovNDkuNDkuNjstNTovNTovNDkvMzguNTouNTowNDkvNDkvMzsuNTouNTktNDkvNDgvMzouNTouNTkuNDkvNDovNjovNTkuNTkuNDstNDovNTovNTkuNTkuNDouNDovNTkvNTkvNDouNDouNDkvNTkvNTkvNDouNDouNDkuNTkvNTovNDovNDkuNTkuNTovNTovNDovNDkuNTkuNTouNTovNDkvNDktNTouNTouMzgvNDkvNDkvNTouNTouMzkuNDkvNDovNTotNTguMzkuNDovNTovNTovNTktMzkuNDovNTovNTgvNTktMzouNDouNTgvNTkvNTkvNDotNDouNTgvNTkvMzovNDotNDguNTkuNTovMzovNDotNDgtNTkuNTovMzovNDgvNTktNTouNTouMzgvNDgvNTktNTotNTouMzgvNDkvNTovNTotMzguMzgvNDovNTovNTotMzgtMzkuNDovNTovNTgvMzktMzouNTovNTgvNTgvMzktMzotNTouNTgvNTkvMzotMzotNTgtNTgvMzovMzovNDotNTgtNTkuMzovMzovNDgtNTgtNTotMzovMzgvNTgvNTktNTotMzovMzgvNTgvNTotNTotMzgtMzgvNTovNTovNTppK1gNAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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'
let homework_base64 = 'data:image/png;base64,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'
let theClass_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUAAAAAAAAAAABVVVU/Pz8zMzMqKiokJEgfPz84ODgzMzMuLkUqKj8nOjo2NjYzMzMvLz8tPDwqODg1NTUzMz8wMDwuOTksNzcqNTUyMj0xMTovODgtNjYrND0zMzsxMTkvNzcuNj0tNDwrMjoxMTgwNzcuNTwtNDosMzkxNzcwNjwvNTsuNDktMjgsNzcwNjsvNTouNDktMjgtNzwxNTowNDkvMzguMjwtNjsxNTowNDkvMzguMzstNjotNTkwNDgvMzsvNjouNjktNTkwNDgwMzsvNjouNTkuNTgtNDswMzovNjkuNTkuNDstNDowMzovNjkvNTguNDsuNDotMzkwNjkvNTsuNDouNDktMzkwNTgvNTovNDouNDkuNjgwNTsvNTovNDkuNDkuNjstNTovNTovNDkvMzguNTouNTowNDkvNDkvMzsuNTouNTktNDkvNDgvMzouNTouNTkuNDkvNDovNjovNTkuNTkuNDstNDovNTovNTkuNTkuNDouNDovNTkvNTkvNDouNDouNDkvNTkvNTkvNDouNDouNDkuNTkvNTovNDovNDkuNTkuNTovNTovNDovNDkuNTkuNTouNTovNDkvNDktNTouNTouMzgvNDkvNDkvNTouNTouMzkuNDkvNDovNTotNTguMzkuNDovNTovNTovNTktMzkuNDovNTovNTgvNTktMzouNDouNTgvNTkvNTkvNDotNDouNTgvNTkvMzovNDotNDguNTkuNTovMzovNDotNDgtNTkuNTovMzovNDgvNTktNTouNTouMzgvNDgvNTktNTotNTouMzgvNDkvNTovNTotMzguMzgvNDovNTovNTotMzgtMzkuNDovNTovNTgvMzktMzouNTovNTgvNTgvMzktMzotNTouNTgvNTkvMzotMzotNTgtNTgvMzovMzovNDotNTgtNTkuMzovMzovNDgtNTgtNTotMzovMzgvNTgvNTktNTotMzovMzgvNTgvNTotNTotMzgtMzgvNTovNTovNTppK1gNAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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'
let my_base64 = 'data:image/png;base64,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KwM6dwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNS0wNFQyMTo0NDo1MyswODowMIRIR4gAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUzM8q8AZUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTMzWU1RyAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxMzk5MjExMDkzQpBh+QAAABN0RVh0VGh1bWI6OlNpemUAMTAuMUtCQirRrdwAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTYwMi8xMTYwMjA2LnBuZ2hohJkAAAAASUVORK5CYII=';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'teaching'
    }
  }

  _renderView(){
    let view = null;
    switch (this.state.selectedTab){
      case 'teaching':
        view = <Teaching></Teaching>;
        break;
      case 'homework':
        view = <Homework></Homework>;
        break;
      case 'TheClass':
        view = <TheClass></TheClass>
        break;
      case 'my':
        view = <My></My>
    }
    return view;
  }

  render() {
    return (
      <View  style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'teaching'}
            title="教学"
            renderIcon={() => <Image source={{uri: teaching_base64}} style={styles.NavIcon} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'teaching' })}>
            {this._renderView()}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'homework'}
            title="作业"
            renderIcon={() => <Image source={{uri: homework_base64}} style={styles.NavIcon} />}
            onPress={() => this.setState({ selectedTab: 'homework' })}>
            {this._renderView()}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'TheClass'}
            title="班级"
            renderIcon={() => <Image source={{uri: theClass_base64}} style={styles.NavIcon} />}
            onPress={() => this.setState({ selectedTab: 'TheClass' })}>
            {this._renderView()}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="我的"
            renderIcon={() => <Image source={{uri: my_base64}} style={styles.NavIcon} />}
            onPress={() => this.setState({ selectedTab: 'my' })}>
            {this._renderView()}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavIcon: {
    width: 30,
    height: 30,
    resizeMode: Image.resizeMode.contain,
  }
});
