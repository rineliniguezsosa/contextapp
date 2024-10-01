import React from 'react';
import { View,Text } from 'react-native';
import { useProfileStore } from '../../../store/profile.store';

export const ProfileScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
  return (
    <View>
      <Text>Hola, {name} con el email: {email}</Text>
    </View>
  );
};
