type Theme = 'coral' | 'pipeline' | 'freight';

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

const enum IconSize {
  xsmall = 20,
  small = 25,
  medium = 30,
  large = 35,
  xlarge = 40,
}

export {ColorTheme, IconSize};
export type {Theme};
