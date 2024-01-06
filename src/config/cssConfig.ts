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
};

export const themesMap = new Map<string, ColorTheme>([
  [
    'pipeline',
    {
      appColor1: colors['freight-100'],
      appColor2: '#FBFBFB',
      pillColor1: '#EE8453',
      pillColor2: '#88B8C6',
      fontColor1: '#252429',
      fontColor2: '#EFEFEF',
      buttonPrimaryColor: '#252429',
      buttonSecondaryColor: '',
      disabledButtonColor: '',
    } as ColorTheme,
  ],
  [
    'coral',
    {
      appColor1: colors['freight-100'], // '#7ECAF4',
      appColor2: '#FBFBFB',
      pillColor1: '#EE8453',
      pillColor2: '#88B8C6',
      fontColor1: '#252429',
      fontColor2: '#EFEFEF',
      buttonPrimaryColor: '#252429',
      buttonSecondaryColor: '',
      disabledButtonColor: '',
    } as ColorTheme,
  ],
]);

class ColorTheme {
  appColor1!: string; // Login page bg color, Header color. This is the primary color of the app and its logo
  appColor2!: string; // Color of the background in rest of the pages other than Login page
  pillColor1!: string; // Color used for important property features
  pillColor2!: string; // Color used for secondary property features
  fontColor1!: string; // Primary font color
  fontColor2!: string; // Contrast font color
  buttonPrimaryColor!: string; // Primary button fill color
  buttonSecondaryColor!: string; // Secondary button fill color
  disabledButtonColor!: string; // Disabled button fill color
}
