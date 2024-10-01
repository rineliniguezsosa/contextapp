import React from 'react';
import { View,Text,Pressable } from 'react-native';
import { useProfileStore } from '../../../store/profile.store';
import { globalStyles } from '../../../styles/theme';

export const ProfileScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const handleChangleProfile = useProfileStore(state => state.handleChangleProfile);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Hola, {name} con el email: {email}</Text>

      <Pressable style={globalStyles.primaryButton} onPress={()=> useProfileStore.setState({name:'name cambiado',email:'email cambiado'})}>
        <Text>Change state</Text>
      </Pressable>

      <Pressable style={globalStyles.primaryButton} onPress={()=> handleChangleProfile('name cambiado otra vez','email cambiado') }>
        <Text>Change state</Text>
      </Pressable>
    </View>
  );
};
