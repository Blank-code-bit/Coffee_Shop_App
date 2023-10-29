import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent('Coffee_Shop_App', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('Coffee_Shop_App', {rootTag});
}
