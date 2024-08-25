/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import StartUp from './src/StartUp';

AppRegistry.registerComponent(appName, () => StartUp);
