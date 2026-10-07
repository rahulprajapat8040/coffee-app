import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Tab } from '../interfaces/checkout.interface';
import { COLORS } from '@/lib/constants/color.constant';
import { AppText } from '@/components/common/text/app-text';
import { FONTS } from '@/lib/constants/font.constant';

interface Props {
  tab: Tab;
  onPress: (tab: Tab) => void;
}

interface TabButton {
  label: string;
  value: Tab;
}

export const CheckoutTab = ({ tab, onPress }: Props) => {
  const buttons: TabButton[] = [
    { label: 'Deliver', value: 'DELIVER' },
    { label: 'Pick Up', value: 'PICK_UP' },
  ];

  return (
    <View style={styles.container}>
      {buttons.map(i => {
        const isActive = tab === i.value;
        return (
          <Pressable
            key={i.value}
            onPress={() => onPress(i.value)}
            style={[styles.tabButton, isActive && styles.tabButtonActive]}
          >
            <AppText
              weight={isActive ? FONTS.semibold : FONTS.regular}
              style={[styles.tabText, isActive && styles.tabTextActive]}
            >
              {i.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.SURFACE.WHITE_ACTIVE,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 52,
    borderRadius: 8,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: COLORS.BRWON.NORMAL,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 18,
  },
  tabTextActive: {
    color: COLORS.SURFACE.WHITE,
  },
});
