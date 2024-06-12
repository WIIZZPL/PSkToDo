import { StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from './navigators/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <StatusBar/>
      <BottomTabs/>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}