import {Theme} from './config.types';
import {themesMap} from './cssConfig';

const ConfigTheme =
  (process.env.REACT_APP_UPREAL_UI_THEME as Theme) ?? 'pipeline';
console.log('AppTheme', ConfigTheme);

export {ConfigTheme};
