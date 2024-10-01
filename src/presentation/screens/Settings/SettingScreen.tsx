import React from 'react';
import { View,Text,Pressable } from 'react-native';
import { useSettingStore } from '../../../store/counter.store';

export const SettingScreen = () => {
    const count = useSettingStore(state => state.count);
    const handleIncrementBy = useSettingStore(state => state.handleIncrementBy);
  return (
    <View>
      <Text>SettingScreen</Text>

     <Text>{count}</Text>

      <Pressable onPress={()=> handleIncrementBy(1) }>
        <Text>Increment +1</Text>
      </Pressable>
    </View>
  );
};
