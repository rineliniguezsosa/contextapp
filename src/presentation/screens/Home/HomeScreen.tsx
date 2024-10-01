import React from 'react';
import { View,Text } from 'react-native';
import { useSettingStore } from '../../../store/counter.store';

export const HomeScreen = () => {
    const count = useSettingStore(state => state.count);
  return (
    <View>
      <Text>HomeScreen</Text>

      <Text>{count}</Text>
    </View>
  );
};
