import React from 'react';
import {View, StyleSheet,} from 'react-native';
import {useDispatch} from 'react-redux';
import {play, setLevel} from '../store/actions';

import Button from './Button';

export default function Menu(props){

  const {navigation} = props;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <Button
          title="Play"
          onPress={() => {
            dispatch(setLevel());
            dispatch(play());
            navigation.navigate('Game');
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <Button
            small
            title="Star"
            onPress={() => navigation.navigate('Shop')}
          />
          <Button
            small
            title="Theme"
            onPress={() => navigation.navigate('Shop')}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});