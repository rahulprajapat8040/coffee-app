import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from '../icons/svg';
import { COLORS } from '@/lib/constants/color.constant';

interface Props {
  title?: string;
  rightIcon?: React.ReactNode;
  onIconPress?: () => void;
}
export const ScreenHeader = ({ title, rightIcon, onIconPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.title}>
          <ChevronLeft />
        </Text>
      </Pressable>
      <Text>{title}</Text>
      <Text>{rightIcon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'static',
    top:0,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: COLORS.GREY.NORMAL,
    fontWeight: 'bold'
  },
});
