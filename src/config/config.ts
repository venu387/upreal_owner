import {Theme} from './config.types';

/* 
  Config key that controls the apprearance of the app. App color theme can be changed with this config.
  Allowed value: pipeline, coral, freight
*/
const ConfigTheme =
  (process.env.REACT_APP_UPREAL_UI_THEME as Theme) ?? 'pipeline';

/* 
  Config key for API Base Url
*/
const ApiBaseUrl = (process.env.REACT_APP_UPREAL_UI_THEME ?? 'locahost:5000')
  .replace('/', '')
  .replace('\\', '');

export {ConfigTheme, ApiBaseUrl};
