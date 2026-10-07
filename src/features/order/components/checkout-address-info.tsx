import { BookLine, EditPencil } from '@/components/common/icons/svg';
import { AppText } from '@/components/common/text/app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONT_SIZES, FONTS } from '@/lib/constants/font.constant';
import { Pressable, StyleSheet, View } from 'react-native';

export const CheckoutAddressInfo = () => {
  return (
    <View style={styles.container}>
      <AppText size={FONT_SIZES.lg} weight={FONTS.semibold}>
        Delivery Address
      </AppText>
      <View style={{ paddingVertical: 12 }}>
        <AppText size={FONT_SIZES.md} weight={FONTS.semibold}>
          Jl. Kpg Sutoyo
        </AppText>
        <AppText color={COLORS.GREY.LIGHT} size={FONT_SIZES.md}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.addressButton}>
          <EditPencil />
          <AppText style={styles.addressButtonText}>Edit Address</AppText>
        </Pressable>
        <Pressable style={styles.addressButton}>
          <BookLine />
          <AppText style={styles.addressButtonText}>Add Note</AppText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    paddingBottom: 22,
    borderColor: COLORS.SURFACE.LIGHT_ACTIVE,
  },
  addressButton: {
    borderWidth: 1,
    borderColor: COLORS.GREY.LIGHT,
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addressButtonText: {
    color: COLORS.GREY.NORMAL,
    fontSize: FONT_SIZES.sm,
  },
});
