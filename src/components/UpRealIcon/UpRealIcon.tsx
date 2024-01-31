import React from 'react';
import {IconSize, IconType} from '@upreal/config/config.types';
import {AppTheme} from '@upreal/config/cssConfig';
import {StyleProp, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type UpRealIconProps = {
  name: string;
  size: IconSize;
  color?: string;
  style?: StyleProp<TextStyle>;
  type: IconType; // IonIcons, MaterialCommunityIcons
};

export const UpRealIcon = (props: UpRealIconProps) => {
  const {name, size, color, style, type} = props;
  return (
    <>
      {type === IconType.ion && (
        <Icon style={style} name={name} size={size} color={color} />
      )}
      {type === IconType.matcom && (
        <MaterialCommunityIcons
          color={color ?? AppTheme?.fontColor1}
          name={name}
          size={size}
          style={style}
        />
      )}
    </>
  );
};
