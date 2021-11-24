import React, { ReactNode } from 'react';

import {
  ActivityIndicator,
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  color: ColorValue,
  backgroundColor: ColorValue,
  icon?: React.ComponentProps<typeof AntDesign>['name'],
  isLoading?: boolean,
}

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      {isLoading ?
        <ActivityIndicator color={color} style={styles.icon} />
        :
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      }
    </TouchableOpacity>
  );
}