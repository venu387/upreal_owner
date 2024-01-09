import React from 'react';
import {Text} from 'react-native';

const typographyStyles = new Map<string, any>([
  [
    'h1',
    {
      fontSize: 72,
      fontWeight: '200',
    },
  ],
  [
    'h2',
    {
      fontSize: 64,
      fontWeight: '200',
      lineHeight: 80,
    },
  ],
  [
    'h3',
    {
      fontSize: 48,
      fontWeight: '200',
    },
  ],
  [
    'h4',
    {
      fontSize: 32,
      fontWeight: '200',
      lineHeight: 40,
    },
  ],
  [
    'h5',
    {
      fontSize: 28,
      fontWeight: '200',
    },
  ],
  [
    'h6',
    {
      fontSize: 24,
      fontWeight: '500',
    },
  ],
  [
    'title',
    {
      fontSize: 28,
      fontWeight: '500',
    },
  ],
  [
    'subtitle-1',
    {
      fontSize: 20,
      fontFamily: 'Lato-Bold',
    },
  ],
  [
    'subtitle-2',
    {
      fontSize: 18,
      fontFamily: 'Lato-Bold',
    },
  ],
  [
    'subtitle-3',
    {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
    },
  ],
  [
    'subtitle-4',
    {
      fontSize: 14,
      fontFamily: 'Lato-Bold',
    },
  ],
  [
    'body-1',
    {
      fontSize: 20,
      fontFamily: 'Lato-Regular',
      lineHeight: 22,
    },
  ],
  [
    'body-2',
    {
      fontSize: 18,
      fontFamily: 'Lato-Regular',
      lineHeight: 20,
    },
  ],
  [
    'body-3',
    {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      lineHeight: 18,
    },
  ],
  [
    'body-4',
    {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      lineHeight: 16,
    },
  ],
  [
    'body-5',
    {
      fontSize: 12,
      fontFamily: 'Lato-Regular',
      lineHeight: 14,
    },
  ],
  [
    'label-1',
    {
      fontSize: 14,
      fontFamily: 'Lato-Thin',
      lineHeight: 16,
      textTransform: 'uppercase',
    },
  ],
  [
    'label-2',
    {
      fontSize: 13,
      fontFamily: 'Lato-Thin',
      lineHeight: 15,
      textTransform: 'uppercase',
    },
  ],
  [
    'label-3',
    {
      fontSize: 12,
      fontFamily: 'Lato-Thin',
      lineHeight: 13,
      textTransform: 'uppercase',
    },
  ],
  [
    'link',
    {
      fontSize: 15,
      fontFamily: 'Lato-Bold',
      lineHeight: 18,
      textTransform: 'uppercase',
      textDecorationLine: 'underline',
    },
  ],
  [
    'button',
    {
      fontSize: 18,
      fontFamily: 'Lato-Bold',
      lineHeight: 20,
      textTransform: 'uppercase',
    },
  ],
]);

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'title'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'subtitle-3'
  | 'subtitle-4'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  | 'body-5'
  | 'label-1'
  | 'label-2'
  | 'label-3'
  | 'button'
  | 'link';

export interface TypographyProps {
  children: React.ReactNode | undefined;
  styles?: {};
  variant: TypographyVariant;
  onPress: any;
}

export const Typography = (props: TypographyProps) => {
  const {children, styles, variant, onPress} = props;
  const TypographyClass = typographyStyles.get(variant);

  return (
    <Text style={[TypographyClass, styles]} onPress={onPress}>
      {children}
    </Text>
  );
};

Typography.displayName = 'Typography';
