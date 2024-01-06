import {Theme} from './config.types';
import {themesMap} from './cssConfig';

const ConfigTheme =
  (process.env.REACT_APP_UPREAL_UI_THEME as Theme) ?? 'pipeline';
const AppTheme = themesMap.get(ConfigTheme) ?? themesMap.get('pipeline');
console.log('AppTheme', AppTheme);

export {AppTheme};
