import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient-fabric';
import { onboardingStorage } from '../onboarding.storage';

interface Props {
  onComplete: () => void;
}

export const OnboardingScreen = ({ onComplete }: Props) => {
  const handleGetStarted = async () => {
    await onboardingStorage.complete();
    onComplete();
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={require('@/assets/img/splash_1.png')}
          style={style.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            'transparent',
            'rgba(0,0,0,0.08)',
            'rgba(0,0,0,0.35)',
            'rgba(0,0,0,0.75)',
            '#000000',
          ]}
          locations={[0, 0.2, 0.45, 0.75, 1]}
          style={style.imageGradient}
        />
      </View>
      <View style={style.content}>
        <Text style={style.title}>
          Fall a Love with {'\n'} Coffee in Blissful {'\n'} Delight!
        </Text>
        <Text style={style.description}>
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>
        <Pressable style={style.button} onPress={handleGetStarted}>
          <Text style={style.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    position: 'absolute',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 70,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },

  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#C9824E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '65%',
  },
});
