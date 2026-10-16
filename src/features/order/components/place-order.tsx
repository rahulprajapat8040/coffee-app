import { ChevronDown, Wallet } from '@/components/common/icons/svg';
import { AppText } from '@/components/common/text/app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONT_SIZES, FONTS } from '@/lib/constants/font.constant';
import { Pressable, StyleSheet, View } from 'react-native';

export const PlaceOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentMethod}>
        <Wallet color={COLORS.BRWON.NORMAL} />
        <View style={{ flex: 1 }}>
          <AppText
            color={COLORS.GREY.NORMAL_ACTIVE}
            weight={FONTS.semibold}
            size={FONT_SIZES.md}
          >
            Cash/Wallet
          </AppText>
          <AppText
            color={COLORS.BRWON.NORMAL}
            size={FONT_SIZES.sm}
            weight={FONTS.semibold}
          >
            $ 5.53
          </AppText>
        </View>
        <ChevronDown />
      </View>
      <Pressable style={styles.orderButton}>
        <AppText color={COLORS.SURFACE.WHITE} weight={FONTS.semibold}>
          Order
        </AppText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SURFACE.WHITE,
    height: 130,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopStartRadius: 36,
    borderTopEndRadius: 36,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 16,
  },
  orderButton: {
    width: '100%',
    height: 56,
    backgroundColor: COLORS.BRWON.NORMAL,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});
