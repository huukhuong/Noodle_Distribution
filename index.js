/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DoneScreen, ErrorScreen, InfomationScreen, LoginScreen, OutOfNoddlesScreen, WelcomeScreen } from './src/screens';

// AppRegistry.registerComponent(appName, () => WelcomeScreen);
// AppRegistry.registerComponent(appName, () => ErrorScreen);
// AppRegistry.registerComponent(appName, () => InfomationScreen);
// AppRegistry.registerComponent(appName, () => OutOfNoddlesScreen);
// AppRegistry.registerComponent(appName, () => DoneScreen);
AppRegistry.registerComponent(appName, () => LoginScreen);
