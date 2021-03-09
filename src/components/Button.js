import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: props.small ? 120 : 250,
          backgroundColor: '#D1E0DB',
          borderColor: '#ECF4F1',
        },
      ]}
      onPress={() => props.onPress()}>
      <Text style={{fontSize:24,color:"#3698A6"}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 20,
    borderWidth: 3,
    margin:5
  }
});
