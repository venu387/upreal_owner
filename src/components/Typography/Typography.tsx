import React, {forwardRef} from 'react';
import {StyleSheet, Text} from 'react-native';

const typographyStyles: Record<string, any> = [
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
];

const StyleLookup: Record<TypographyProps['variant'], {}> = {
  h1: 'text-8xl font-light',
  h2: 'text-[4rem] font-light leading-[5rem]',
  h3: 'text-5xl font-light',
  h4: 'text-[2rem] font-light leading-[2.5rem]',
  h5: 'text-xl font-medium',
  h6: 'text-lg font-semibold',
  title: 'sm:text-xl font-normal',
  'subtitle-1': 'sm:text-sm lg:text-base font-semibold', // 15px, 16px
  'subtitle-2': 'sm:text-[14px] lg:text-[15px] font-semibold', // 14px, 15px
  'subtitle-3': 'sm:text-[13px] lg:text-[14px] font-semibold leading-[1rem]', // 13px, 14px
  'subtitle-4': 'sm:text-[12px] lg:text-[13px] font-semibold leading-[1rem]', // 12px, 13px
  'body-1': 'sm:text-[15px] lg:text-base text-base font-normal', // 15px, 16px
  'body-2': 'sm:text-[14px] lg:text-[15px] font-normal', // 14px, 15px
  'body-3': 'sm:text-[13px] lg:text-[14px] font-normal leading-[1rem]', // 13px, 14px
  'body-4': 'sm:text-[12px] lg:text-[13px] font-normal leading-[1rem]', // 12px, 13px
  'body-5': 'text-[11px] font-normal leading-[1rem]', // 11px
  'label-1': 'text-[13px] font-medium tracking-[2%] uppercase', // 14px, 15px
  'label-2': 'text-[12px] font-medium leading-[1rem] tracking-[5%] uppercase', // 13px, 13px
  'label-3': 'text-[11px] font-medium leading-[1rem] tracking-[5%] uppercase', // 11px, 12px
  button:
    'sm:text-[14px] lg:text-sm font-medium leading-[1.5rem] tracking-[2%]', // 14px, 15px
  link: 'sm:text-[13px] lg:text-[14px] font-semibold leading-[1.5rem] tracking-[2%] underline', // 13px, 14px
};

const ComponentLookup: Record<TypographyProps['variant'], React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  'subtitle-1': 'h6',
  'subtitle-2': 'h6',
  'subtitle-3': 'h6',
  'subtitle-4': 'h6',
  'body-1': 'p',
  'body-2': 'p',
  'body-3': 'p',
  'body-4': 'p',
  'body-5': 'p',
  'label-1': 'label',
  'label-2': 'label',
  'label-3': 'label',
  button: 'span',
  link: 'span',
};

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
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  styles?: {};
  variant: TypographyVariant;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({children, component, styles, variant}, ref) => {
    const Component = component ?? ComponentLookup[variant];
    const TypographyClass = typographyStyles[variant];

    return <Component style={[TypographyClass, styles]}>{children}</Component>;
  },
);

Typography.displayName = 'Typography';
