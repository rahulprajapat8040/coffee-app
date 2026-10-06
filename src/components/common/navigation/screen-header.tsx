import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from '../icons/svg';
import { COLORS } from '@/lib/constants/color.constant';
import { AppText } from '../text/app-text';
import { FONTS } from '@/lib/constants/font.constant';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title?: string;
  rightIcon?: React.ReactNode;
  onIconPress?: () => void;
}
export const ScreenHeader = ({ title, rightIcon, onIconPress }: Props) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.goBack()}>
        <AppText style={styles.title}>
          <ChevronLeft />
        </AppText>
      </Pressable>
      <AppText weight={FONTS.semibold}>{title}</AppText>
      <Text>{rightIcon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'static',
    top: 0,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: COLORS.GREY.NORMAL,
    fontWeight: 'bold',
  },
});
