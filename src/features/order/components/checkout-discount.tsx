import { ChevronRight, Discount } from '@/components/common/icons/svg';
import { AppText } from '@/components/common/text/app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONT_SIZES, FONTS } from '@/lib/constants/font.constant';
import { Pressable, StyleSheet, View } from 'react-native';

export const CheckoutDiscount = () => {
  return (
    <View style={styles.container}>
      <Discount />
      <AppText size={FONT_SIZES.md} weight={FONTS.semibold} style={{ flex: 1 }}>
        1 Discount is Applies
      </AppText>
      <Pressable>
        <ChevronRight />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginVertical: 24,
    paddingHorizontal: 18,
    backgroundColor: COLORS.SURFACE.WHITE,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: COLORS.SURFACE.WHITE_ACTIVE,
    height: 62,
  },
});
