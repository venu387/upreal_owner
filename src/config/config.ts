import {Theme} from './config.types';

const ConfigTheme =
  (process.env.REACT_APP_UPREAL_UI_THEME as Theme) ?? 'pipeline';

export {ConfigTheme};
