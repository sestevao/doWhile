import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { UserPhoto } from '../UserPhoto';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />


      <View style={styles.logoutButton}>
        {user &&
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        }

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}