import React from 'react';
import { View,Text } from 'react-native';
import { useSettingStore } from '../../../store/counter.store';
import { globalStyles } from '../../../styles/theme';

export const HomeScreen = () => {
    const count = useSettingStore(state => state.count);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>HomeScreen</Text>

      <Text>{count}</Text>
    </View>
  );
};
