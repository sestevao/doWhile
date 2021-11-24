import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { SendMessageForm } from '../../components/SendMessageForm';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { Header } from '../../components/Header';

import { styles } from './styles';

import { useAuth } from '../../hooks/auth';

export function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}