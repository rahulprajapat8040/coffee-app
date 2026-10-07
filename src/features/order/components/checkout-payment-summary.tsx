import { AppText } from '@/components/common/text/app-text';
import { FONT_SIZES, FONTS } from '@/lib/constants/font.constant';
import { StyleSheet, View } from 'react-native';

export const CheckoutPaymentSummary = () => {
  return (
    <View>
      <AppText weight={FONTS.semibold}>Payment Summary</AppText>
      <View style={{ marginVertical: 12 }}>
        <View style={styles.row}>
          <AppText style={styles.text}>Price</AppText>
          <AppText weight={FONTS.semibold} style={styles.text}>
            $ 4.53
          </AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.text}>Delivery Fee</AppText>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <AppText
              style={[{ textDecorationLine: 'line-through' }, styles.text]}
            >
              $ 2.0
            </AppText>
            <AppText style={styles.text} weight={FONTS.semibold}>
              $ 1.0
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: FONT_SIZES.md,
  },
});
