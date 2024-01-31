import {AppTheme, colors} from '@upreal/config/cssConfig';
import {Animated, View} from 'react-native';
import {Typography} from '../Typography';
import React, {useRef} from 'react';
import {UpRealIcon} from '../UpRealIcon/UpRealIcon';
import {IconSize, IconType} from '@upreal/config/config.types';

const Toaster = ({title, type}: any) => {
  const getIconAndColor = () => {
    switch (type) {
      case 'success':
        return {icon: 'checkmark-circle', color: colors['state-success']};
      case 'warning':
        return {icon: 'alert-circle', color: colors['state-warning']};
      case 'error':
        return {icon: 'close-circle', color: colors['state-error']};
      case 'info':
        return {icon: 'alert-circle', color: AppTheme?.appColor1};
      default:
        return {
          icon: 'notifications-circle',
          color: AppTheme?.buttonPrimaryColor,
        };
    }
  };

  const statusIcon: {icon: string; color: string | undefined} =
    getIconAndColor();

  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <View
      style={{
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        marginBottom: 15,
        padding: 10,
        paddingLeft: 12,
        paddingRight: 10,
        justifyContent: 'space-between',
        borderRadius: 12,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: 10,
        }}>
        <UpRealIcon
          name={statusIcon.icon}
          type={IconType.ion}
          size={IconSize.large}
          color={statusIcon.color}></UpRealIcon>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          paddingRight: 10,
        }}>
        <Typography variant="body-2">{title}</Typography>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        onTouchStart={() => {
          console.log('touch');
        }}>
        <UpRealIcon
          name="arrow-forward"
          type={IconType.ion}
          size={IconSize.xsmall}
          color={colors['base-black']}></UpRealIcon>
      </View>
    </View>
  );
};
export default Toaster;
