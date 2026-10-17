import {
  ActivityIndicator,
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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@/app/navigation/main-navigator';
import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { homeApi } from '@/features/home/api/home.api';
import { ICoffee } from '@/lib/interfaces/coffes.interface';
import { useMemo, useState } from 'react';

interface ProductProp extends ICoffee {
  onPress?: () => void;
}



type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'CofeeDetails'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  const {
    data: {
      data: { categories },
    },
  } = useSuspenseQuery({
    queryFn: () => homeApi.getCategories(),
    queryKey: ['home', 'categories'],
  });

   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
     useInfiniteQuery({
       queryFn: ({ pageParam }) =>
         homeApi.getCoffees({
           categoryId: selectedCategoryId,
           page: pageParam,
         }),
       queryKey: ['home', 'products', selectedCategoryId],
       initialPageParam: 1,
       getNextPageParam: lastPage => {
         const { page, totalPage } = lastPage.data.pageInfo;
         return page < totalPage ? page + 1 : undefined;
       },
     });

     const products = useMemo(
       () => data?.pages.flatMap(page => page.data.data),
       [data?.pages],
     );

  return (
    <FlatList
      key="products-2-columns"
      data={products}
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: 30,
        backgroundColor: COLORS.SURFACE.LIGHT,
      }}
      columnWrapperStyle={{
        gap: 12,
        paddingHorizontal: 20,
      }}
      keyExtractor={item => item.id}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingNextPage ? (
          <ActivityIndicator
            size={'large'}
            color={COLORS.BRWON.NORMAL}
            style={{ paddingVertical: 20 }}
          />
        ) : undefined
      }
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
            <Homecategories
              activeId={selectedCategoryId}
              onPress={id => setSelectedCategoryId(id)}
              categories={categories}
            />
          </View>
        </>
      }
      renderItem={({ item }) => (
        <ProductCard
          {...item}
          onPress={() =>
            navigation.navigate('CofeeDetails', { coffeeId: item.id })
          }
        />
      )}
    />
  );
};

const ProductCard = ({
  name,
  category,
  image,
  onPress,
}: ProductProp) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image style={styles.productImage} src={image} />
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: COLORS.GREY.LIGHT }}>{category.name}</Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$ {4.53}</Text>
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
    </Pressable>
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
