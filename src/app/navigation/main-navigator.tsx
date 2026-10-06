import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from './main-tabs';
import { CoffeeDetailScreen } from '@/features/coffees/screens/coffee-detail-screen';
import { CheckoutScreen } from '@/features/order/screens/chekcout-screen';

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
      <Stack.Screen name="CofeeDetails" component={CoffeeDetailScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
