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
  'bg-200': '#FBFBFB',
  'bg-300': '#FDFFE3',
  'bg-400': '#FFEDDD',
  'bg-placeholder': '#A5A5A5',
  
  'state-error': '#FF2A2A',
  'state-warning': '#FF9F2E',
  'state-success': '#00CC08',
};

export const themesMap = new Map<string, ColorTheme>([
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
      buttonSecondaryColor: colors['cement-100'],
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
      buttonSecondaryColor: colors['cement-100'],
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
      buttonSecondaryColor: colors['cement-100'],
      disabledButtonColor: colors['base-inactive'],
    } as ColorTheme,
  ]
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
