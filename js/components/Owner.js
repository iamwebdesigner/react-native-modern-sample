import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import MenuButton from './MenuButton';
import { Actions, ActionConst } from 'react-native-router-flux';

export default class Owner extends Component {
  constructor(props) {
    super(props);
  }
  goToScreen(scene, params = {}) {
    this.props.closeDrawer();
    Actions[scene]({type: ActionConst.REPLACE, ...params});
  }
  render() {
    return (
      <View>
        <MenuButton text='My restaurant' onPress={() => {
          this.props.store.loadUserRestaurant();
          this.goToScreen('meals');
        }}/>
        <MenuButton text='My orders' onPress={() => this.goToScreen('orders')}/>
        <MenuButton text='Couriers' onPress={() => this.goToScreen('couriers')}/>
      </View>
    );
  }
}
