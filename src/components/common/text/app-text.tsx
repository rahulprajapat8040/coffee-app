import { FONTS } from '@/lib/constants/font.constant';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  weight?: string;
}

export const AppText = ({ style, weight = FONTS.regular, ...props }: Props) => {
  return <Text style={[{ fontFamily: weight }, style]} {...props} />;
};
