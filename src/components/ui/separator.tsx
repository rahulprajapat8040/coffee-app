import { COLORS } from '@/lib/constants/color.constant';
import { View } from 'react-native';

interface Props {
  width?: number | string;
  height?: number | string;
  color?: string;
  margin?: number;
}

export const Separator = ({
  width = '100%',
  height = 4,
  color = COLORS.BRWON.LIGHT,
  margin,
}: Props) => {
  return (
    <View
      style={{ width, height, backgroundColor: color, marginVertical: margin }}
    />
  );
};
