import { NavigationContainer } from '@react-navigation/native';
import { AppBootstrap } from './app-bootstrap';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <AppBootstrap />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
