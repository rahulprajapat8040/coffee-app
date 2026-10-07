import { ScreenHeader } from '@/components/common/navigation/screen-header';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckoutTab } from '../components/checkout-tab';
import { useState } from 'react';
import { Tab } from '../interfaces/checkout.interface';
import { CheckoutAddressInfo } from '../components/checkout-address-info';
import { CheckoutItems } from '../components/checkout-items';
import { Separator } from '@/components/ui/separator';
import { COLORS } from '@/lib/constants/color.constant';
import { CheckoutDiscount } from '../components/checkout-discount';
import { CheckoutPaymentSummary } from '../components/checkout-payment-summary';

export const CheckoutScreen = () => {
  const [tab, setTab] = useState<Tab>('DELIVER');
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.SURFACE.LIGHT, flex: 1 }}>
      <ScreenHeader title="Order" />
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <CheckoutTab tab={tab} onPress={tab => setTab(tab)} />
          <CheckoutAddressInfo />
          <CheckoutItems />
        </View>
        <Separator margin={8} />
        <View style={{ paddingHorizontal: 20 }}>
          <CheckoutDiscount />
          <CheckoutPaymentSummary />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
