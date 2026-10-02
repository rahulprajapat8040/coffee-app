import {
  FlatList,
  Image,
  ImageSource,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomeHeader } from '../components/home-header';
import { HomeBanner } from '../components/home-banner';
import { Homecategories } from '../components/home-categories';
import { COLORS } from '@/lib/constants/color.constant';
import { Plus } from '@/components/common/icons/svg';

interface ProductProp {
  id: string;
  rating: number;
  name: string;
  category: string;
  price: number;
  image: ImageSource;
}

const products: ProductProp[] = [
  {
    id: '1',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '2',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '3',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '4',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '5',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '6',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '7',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
  {
    id: '8',
    rating: 4.8,
    name: 'Caffe Mocha',
    category: 'Deep Foam',
    price: 4.53,
    image: require('@/assets/dummy/categories/cat-1.png'),
  },
];

export const HomeScreen = () => {
  return (
    <FlatList
      key="products-2-columns"
      data={products}
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: 30,
      }}
      columnWrapperStyle={{
        gap: 12,
        paddingHorizontal: 20,
      }}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          <View>
            <StatusBar barStyle="light-content" />
            <View style={{ height: 390 }}>
              <View style={styles.header}>
                <Image
                  style={styles.imageGradient}
                  source={require('@/assets/img/home-container.png')}
                />
                <HomeHeader />
                <HomeBanner />
              </View>
            </View>
            <Homecategories />
          </View>
        </>
      }
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

const ProductCard = ({
  id,
  rating,
  name,
  category,
  price,
  image,
}: ProductProp) => {
  return (
    <View style={styles.card}>
      <Image style={styles.productImage} source={image} />
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: COLORS.GREY.LIGHT }}>{category}</Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$ {price}</Text>
          <Pressable
            style={{
              width: 44,
              height: 44,
              backgroundColor: COLORS.BRWON.NORMAL,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
            }}
          >
            <Plus color={COLORS.SURFACE.WHITE} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 270,
    paddingHorizontal: 20,
    position: 'relative',
  },

  imageGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    width: '50%',
  },

  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
});
