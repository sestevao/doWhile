import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../theme';

import { Button } from '../Button';
import { api } from '../../services/api';


export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleSubmitMessage() {
    const messageFormatted = message.trim();


    if (messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post('/messages', { message: messageFormatted });

      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Message send!!!');
    } else {
      Alert.alert('Write the message to send.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="What are your expectations for this event?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}
      />

      <Button
        title="SEND MESSAGE"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        isLoading={sendingMessage}
        onPress={handleSubmitMessage}
      />
    </View>
  );
}