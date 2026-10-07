import { Minus, Plus } from '@/components/common/icons/svg';
import { AppText } from '@/components/common/text/app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONT_SIZES, FONTS } from '@/lib/constants/font.constant';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageSource,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

interface CheckoutItems {
  id: string;
  name: string;
  category: string;
  image: ImageSource;
  quantity: number;
}

const items: CheckoutItems[] = [
  {
    id: '1',
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    image: require('@/assets/dummy/categories/cat-1.png'),
    quantity: 1,
  },
  {
    id: '2',
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    image: require('@/assets/dummy/categories/cat-1.png'),
    quantity: 1,
  },
];

export const CheckoutItems = () => {
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItems[]>(items);

  const updateQuantity = (id: string, quantity: number) => {
    setCheckoutItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  return (
    <View>
        {checkoutItems.map(item => {
          return (
            <View style={styles.itemContainer}>
              <Image style={styles.itemImage} source={item.image} />
              <View style={{ flex: 1 }}>
                <AppText
                  size={FONT_SIZES.base}
                  weight={FONTS.semibold}
                  style={{ paddingVertical: 2 }}
                >
                  {item.name}
                </AppText>
                <AppText size={FONT_SIZES.sm} color={COLORS.GREY.LIGHT}>
                  {item.category}
                </AppText>
              </View>
              <QuantityCounter
                quantity={item.quantity}
                onPress={quantity => updateQuantity(item.id, quantity)}
              />
            </View>
          );
        })}
      </View>
  );
};

const QuantityCounter = ({
  quantity,
  onPress,
}: {
  quantity: number;
  onPress: (quantity: number) => void;
}) => {
  const decrease = () => {
    if (quantity > 1) {
      onPress(quantity - 1);
    }
  };

  const increase = () => {
    onPress(quantity + 1);
  };

  return (
    <View style={styles.quantityButtons}>
      <Pressable
        disabled={quantity === 1}
        onPress={decrease}
        style={styles.quantityButton}
      >
        <Minus
          color={quantity === 1 ? COLORS.GREY.LIGHT : COLORS.GREY.NORMAL}
          size={16}
        />
      </Pressable>
      <AppText style={{ width: 28, textAlign: 'center' }}>{quantity}</AppText>
      <Pressable onPress={increase} style={styles.quantityButton}>
        <Plus size={16} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    marginBottom: 18
  },
  itemImage: {
    width: 54,
    height: 54,
    objectFit: 'cover',
    borderRadius: 8,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  quantityButton: {
    height: 24,
    width: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.BRWON.LIGHT,
    backgroundColor: COLORS.SURFACE.WHITE,
  },
});
