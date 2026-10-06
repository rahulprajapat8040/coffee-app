import { MainStackParamList } from '@/app/navigation/main-navigator';
import {
  MatchaIcon,
  OrderPlaceIcon,
  packIcon,
  Star,
  TabIcons,
} from '@/components/common/icons/svg';
import { ScreenHeader } from '@/components/common/navigation/screen-header';
import { AppText } from '@/components/common/text/app-text';
import { ReadMoreText } from '@/components/common/text/read-more-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONTS } from '@/lib/constants/font.constant';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<MainStackParamList, 'CofeeDetails'>;

const detailIcons = [
  {
    id: '1',
    icon: OrderPlaceIcon,
  },
  {
    id: '2',
    icon: MatchaIcon,
  },
  {
    id: '3',
    icon: packIcon,
  },
];

const Sizes = [
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' },
  { label: 'XLL', value: 'xll' },
];

export const CoffeeDetailScreen = ({ route }: Props) => {
  const { coffeeId } = route.params;
  const { width } = useWindowDimensions();
  const buttonWidth = (width - 40 - 24) / 3;

  const [selectedSize, setSelectedSize] = useState(Sizes[0].value);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.SURFACE.LIGHT }}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Detail" rightIcon={<TabIcons.Heart />} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Image
            style={styles.image}
            source={require('@/assets/dummy/categories/cat-1.png')}
          />
          <View style={styles.coffeBasicInfo}>
            <View>
              <AppText weight={FONTS.semibold} style={styles.title}>
                Caffe Mocha
              </AppText>
              <AppText style={{ fontSize: 12, color: COLORS.GREY.LIGHT }}>
                Ice/Hot
              </AppText>
              <View style={styles.rating}>
                <Star size={20} color="#FBBE21" />
                <AppText weight={FONTS.bold} style={{ fontSize: 16 }}>
                  4.8
                </AppText>
                <AppText style={{ color: COLORS.GREY.LIGHT }}>(230)</AppText>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              {detailIcons.map(i => {
                const Icon = i.icon;
                return (
                  <View style={styles.rightIcons} key={i.id}>
                    <Icon size={32} color={COLORS.BRWON.NORMAL} />
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <AppText weight={FONTS.bold} style={{ fontSize: 16 }}>
              Description
            </AppText>
            <ReadMoreText
              numberOfLines={2}
              text="A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of  milk the fo.. A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of  milk the fo..  approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of  milk the fo.. A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of  milk the fo..  approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of  milk the fo.. A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of  milk the fo..  approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of  milk the fo.. A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of  milk the fo..  approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of  milk the fo.. A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of  milk the fo.."
            />
          </View>
          <View>
            <AppText
              weight={FONTS.bold}
              style={{ fontSize: 16, marginTop: 18 }}
            >
              Size
            </AppText>
            <View style={styles.sizesContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.sizesRow}
              >
                {Sizes.map(item => {
                  const isActive = item.value === selectedSize;
                  return (
                    <Pressable
                      key={item.value}
                      style={[
                        styles.sizeButton,
                        isActive && styles.activeSizeButton,
                        { width: buttonWidth },
                      ]}
                      onPress={() => setSelectedSize(item.value)}
                    >
                      <AppText
                        weight={FONTS.semibold}
                        style={[isActive && { color: COLORS.BRWON.NORMAL }]}
                      >
                        {item.label}
                      </AppText>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View>
          <AppText style={{ color: COLORS.GREY.LIGHT_HOVER, fontSize: 14 }}>
            Price
          </AppText>
          <AppText
            weight={FONTS.bold}
            style={{ fontSize: 18, color: COLORS.BRWON.NORMAL }}
          >
            $ 4.53
          </AppText>
        </View>
        <View>
          <Pressable style={styles.orderButton}>
            <AppText
              weight={FONTS.bold}
              style={{
                color: COLORS.SURFACE.WHITE,
                fontSize: 16,
              }}
            >
              Order
            </AppText>
          </Pressable>
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
  rating: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  coffeBasicInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingBottom: 28,
    marginBottom: 20,
    borderBottomColor: COLORS.SURFACE.LIGHT_ACTIVE,
  },
  rightIcons: {
    width: 50,
    height: 50,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },

  sizesContainer: {
    marginTop: 8,
    width: '100%',
    overflow: 'hidden',
  },

  sizesRow: {
    gap: 12,
    paddingVertical: 8,
  },

  sizeButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.SURFACE.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.SURFACE.LIGHT_ACTIVE,
  },

  activeSizeButton: {
    backgroundColor: COLORS.BRWON.LIGHT,
    borderColor: COLORS.BRWON.NORMAL,
  },

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    bottom: 0,
    height: 100,
    backgroundColor: COLORS.SURFACE.WHITE,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderTopWidth: 1,
    borderTopColor: COLORS.SURFACE.LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  orderButton: {
    backgroundColor: COLORS.BRWON.NORMAL,
    width: 240,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
