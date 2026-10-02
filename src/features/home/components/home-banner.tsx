import { COLORS } from '@/lib/constants/color.constant';
import { Image, StyleSheet, Text, View } from 'react-native';

export const HomeBanner = () => {
  return (
    <View style={styles.banner}>
      <Image
        style={styles.bannerImage}
        source={require('@/assets/dummy/home-banner.png')}
      />

      <View style={styles.content}>
        <Text style={styles.promo}>PROMO</Text>
        <Text style={styles.title}>Buy one get one FREE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 165,
    width: '100%',
    position: 'absolute',
    bottom: -90,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bannerImage: {
    position: 'absolute',
    inset: 0,
    objectFit: 'cover',
    width: '100%',
    zIndex: 1,
    height: '100%',
  },
  content: {
    paddingLeft: 20,
    paddingRight: 70,
    zIndex: 2,
  },
  promo: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#ED5151',
    alignSelf: 'flex-start',
    color: COLORS.SURFACE.WHITE,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  title: {
    fontSize: 38,
    color: COLORS.SURFACE.WHITE,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {
      width: 0,
      height: -5,
    },
    textShadowRadius: 3,
  },
});
