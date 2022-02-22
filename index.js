/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ErrorScreen, OutOfNoddlesScreen, WelcomeScreen } from './src/screens';

AppRegistry.registerComponent(appName, () => OutOfNoddlesScreen);
