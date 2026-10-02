import { NavigationContainer } from '@react-navigation/native';
import { AppBootstrap } from './app-bootstrap';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"    />
      <NavigationContainer>
        <AppBootstrap />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
