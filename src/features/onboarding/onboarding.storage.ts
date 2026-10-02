import AsyncStorage from '@react-native-async-storage/async-storage';
const ONBOARDING_KEY = '@coffee_app/onboarding_completed';

export const onboardingStorage = {
  async isCompleted(): Promise<boolean> {
    const value = await AsyncStorage.getItem(ONBOARDING_KEY);
    return value === 'true';
  },

  async complete(): Promise<void> {
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
  },

  async reset(): Promise<void> {
    await AsyncStorage.removeItem(ONBOARDING_KEY);
  },
};
