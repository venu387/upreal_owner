import {Theme} from './config.types';
import {themesMap} from './cssConfig';

const ConfigTheme =
  (process.env.REACT_APP_UPREAL_UI_THEME as Theme) ?? 'pipeline';
const AppTheme = themesMap.get(ConfigTheme);
console.log('AppTheme', AppTheme);

export {AppTheme};
