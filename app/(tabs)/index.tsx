import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View 
    style={{
      backgroundColor: '#89A8B2',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text 
      style={{
        fontSize: 30,
        backgroundColor: '#B3C8CF',
        padding: 20,
        borderRadius: 10
      }}>
        Hello
      </Text>
    </View>
  );
};
