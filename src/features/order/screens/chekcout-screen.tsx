import { ScreenHeader } from '@/components/common/navigation/screen-header';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CheckoutScreen = () => {
  return (
    <SafeAreaView>
      <ScreenHeader title="Order" />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Text>hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
