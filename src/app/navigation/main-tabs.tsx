import { CustomTabBar } from '@/components/common/navigation/custom-tab-bar';
import { HomeScreen } from '@/features/home/screens/home-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  Home: undefined;
  WishList: undefined;
  Orders: undefined;
  Profile: undefined;
  Notifications: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="WishList" component={HomeScreen} />
      <Tab.Screen name="Orders" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={HomeScreen} />
    </Tab.Navigator>
  );
};
