import { MainStackParamList } from '@/app/navigation/main-navigator';
import { TabIcons } from '@/components/common/icons/svg';
import { ScreenHeader } from '@/components/common/navigation/screen-header';
import { AppText } from '@/components/ui/app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONTS } from '@/lib/constants/font.constant';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<MainStackParamList, 'CofeeDetails'>;

export const CoffeeDetailScreen = ({ route }: Props) => {
  const { coffeeId } = route.params;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Detail" rightIcon={<TabIcons.Heart />} />
      <View style={{ paddingHorizontal: 20 }}>
        <Image
          style={styles.image}
          source={require('@/assets/dummy/categories/cat-1.png')}
        />
        <View style={{ paddingVertical: 20 }}>
          <View>
            <AppText weight={FONTS.semibold} style={styles.title}>
              Caffe Mocha
            </AppText>
            <AppText style={{ fontSize: 12, color: COLORS.GREY.LIGHT }}>
              Ice/Hot
            </AppText>
            <View></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 18,
  },
  title: {
    fontSize: 20,
  },
});
