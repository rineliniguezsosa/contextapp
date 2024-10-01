import React from 'react';
import { View,Text,Pressable } from 'react-native';
import { useProfileStore } from '../../../store/profile.store';

export const ProfileScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const handleChangleProfile = useProfileStore(state => state.handleChangleProfile);
  return (
    <View>
      <Text>Hola, {name} con el email: {email}</Text>

      <Pressable onPress={()=> useProfileStore.setState({name:'name cambiado',email:'email cambiado'})}>
        <Text>Change state</Text>
      </Pressable>

      <Pressable onPress={()=> handleChangleProfile('name cambiado','email cambiado') }>
        <Text>Change state</Text>
      </Pressable>
    </View>
  );
};
