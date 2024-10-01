/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect } from 'react';
import { View,Text,Pressable } from 'react-native';
import { useSettingStore } from '../../../store/counter.store';
import { useNavigation } from '@react-navigation/native';

export const SettingScreen = () => {
    const count = useSettingStore(state => state.count);
    const handleIncrementBy = useSettingStore(state => state.handleIncrementBy);
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            title:'Count',
            headerTitleAlign: 'center',
        });
    },[]);

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
