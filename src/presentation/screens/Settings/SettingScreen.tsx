/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect } from 'react';
import { View,Text,Pressable } from 'react-native';
import { useSettingStore } from '../../../store/counter.store';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../../styles/theme';

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
    <View style={globalStyles.container}>
     <Text style={globalStyles.title}>SettingScreen</Text>

     <Text style={globalStyles.title}>{count}</Text>

      <Pressable style={globalStyles.primaryButton} onPress={()=> handleIncrementBy(1) }>
        <Text>Increment +1</Text>
      </Pressable>
    </View>
  );
};
