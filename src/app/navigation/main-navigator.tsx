import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from './main-tabs';

export type MainStackParamList = {
  MainTabs: undefined;
  CofeeDetails: {
    coffeeId: string;
  };
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};
