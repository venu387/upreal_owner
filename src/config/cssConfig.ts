import {StyleSheet} from 'react-native';
import {ConfigTheme} from './config';
import {ColorTheme} from './config.types';

const colors = {
  'freight-100': '#EED34B',
  'freight-200': '#DBC245',
  'freight-300': '#B9A541',
  'freight-400': '#928024',
  'freight-500': '#6A5E22',

  'pipeline-100': '#7ECAF4',
  'pipeline-200': '#79B8DB',
  'pipeline-300': '#6797BA',
  'pipeline-400': '#50788E',
  'pipeline-500': '#365360',

  'coral-100': '#EE8453',
  'coral-200': '#D3774D',
  'coral-300': '#B16441',
  'coral-400': '#864B31',
  'coral-500': '#6F402A',

  'rust-100': '#B2613A',
  'rust-200': '#995033',
  'rust-300': '#7F3E2D',
  'rust-400': '#6B3824',
  'rust-500': '#512A1B',

  'site-100': '#CFB380',
  'site-200': '#BA9F74',
  'site-300': '#937D5D',
  'site-400': '#846F53',
  'site-500': '#6B5B43',

  'slate-100': '#A3A0B5',
  'slate-200': '#6F6D7C',
  'slate-300': '#5C5A66',
  'slate-400': '#3B3A42',
  'slate-500': '#252429',

  'cardboard-100': '#DEC7AC',
  'cardboard-200': '#C6B09B',
  'cardboard-300': '#AD9A87',
  'cardboard-400': '#8E7E6F',
  'cardboard-500': '#6B5F54',

  'cement-100': '#EFEFEF',
  'cement-200': '#D3D3D3',
  'cement-300': '#B7B7B7',
  'cement-400': '#A5A5A5',
  'cement-500': '#898989',

  'leaf-100': '#4BD748',
  'leaf-200': '#40A83D',
  'leaf-300': '#338730',
  'leaf-400': '#266925',
  'leaf-500': '#173E16',

  'solar-100': '#88B8C6',
  'solar-200': '#819DA3',
  'solar-300': '#697F84',
  'solar-400': '#526468',
  'solar-500': '#3A4649',

  'base-black': '#000000',
  'base-white': '#FFFFFF',
  'base-inactive': '#C6C4C4',

  'future-200': '#F1D87E',
  'future-100': '#FEF0B8',

  'available-200': '#82C996',
  'available-100': '#CBFAD8',

  'bg-100': '#EFEFEF',
  'bg-200': '#EDF8FF', //'#DBEFFD', //'#FBFBFB',
  'bg-300': '#FDFFE3',
  'bg-400': '#FFEDDD',
  'bg-placeholder': '#A5A5A5',

  'state-error': '#FF6969',
  'state-warning': '#FFB156',
  'state-success': '#00A400',
};

const themesMap = new Map<string, ColorTheme>([
  [
    'pipeline',
    {
      appColor1: colors['pipeline-100'],
      appColor2: colors['bg-200'],
      pillColor1: colors['coral-100'],
      pillColor2: colors['solar-100'],
      fontColor1: colors['slate-500'],
      fontColor2: colors['cement-100'],
      buttonPrimaryColor: colors['slate-500'],
      buttonSecondaryColor: colors['site-400'],
      disabledButtonColor: colors['base-inactive'],
    } as ColorTheme,
  ],
  [
    'coral',
    {
      appColor1: colors['coral-100'],
      appColor2: colors['bg-400'],
      pillColor1: colors['freight-100'],
      pillColor2: colors['solar-100'],
      fontColor1: colors['slate-500'],
      fontColor2: colors['cement-100'],
      buttonPrimaryColor: colors['slate-500'],
      buttonSecondaryColor: colors['cement-500'],
      disabledButtonColor: colors['base-inactive'],
    } as ColorTheme,
  ],
  [
    'freight',
    {
      appColor1: colors['freight-100'],
      appColor2: colors['bg-300'],
      pillColor1: colors['coral-100'],
      pillColor2: colors['available-200'],
      fontColor1: colors['slate-500'],
      fontColor2: colors['cement-100'],
      buttonPrimaryColor: colors['slate-500'],
      buttonSecondaryColor: colors['cement-500'],
      disabledButtonColor: colors['base-inactive'],
    } as ColorTheme,
  ],
]);
const AppTheme = themesMap.get(ConfigTheme) ?? themesMap.get('pipeline');

const BaseStyle = StyleSheet.create({
  background: {
    backgroundColor: AppTheme?.appColor1,
    minHeight: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato-Bold',
  },
  primaryButton: {
    width: '80%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: AppTheme?.buttonPrimaryColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 2,
  },
  secondraryButton: {
    width: '80%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: AppTheme?.fontColor2,
    borderStyle: 'solid',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 2,
  },
  textFieldInput: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  label: {
    fontFamily: 'Lato-Regular',
  },
  bold: {
    fontFamily: 'Lato-Bold',
  },
  italic: {
    fontFamily: 'Lato-Italic',
  },
  error: {
    color: colors['state-error'],
  },
  fontColorPrimary: {
    color: AppTheme?.fontColor1,
  },
  fontColorSecondary: {
    color: AppTheme?.fontColor2,
  },
});

export {AppTheme, colors, BaseStyle};
