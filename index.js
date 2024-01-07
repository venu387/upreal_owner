/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {RootApp} from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

AppRegistry.registerComponent(appName, () => RootApp);
