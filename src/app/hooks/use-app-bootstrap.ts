import { useEffect, useState } from 'react';
import { onboardingStorage } from '../../features/onboarding/onboarding.storage';

type BootStrapStatus = 'loading' | 'ready';

interface BootstrapState {
  status: BootStrapStatus;
  onboardingCompleted: boolean;
  isAuthenticated: boolean;
}

export const useAppBootstrap = () => {
  const [state, setState] = useState<BootstrapState>({
    status: 'loading',
    onboardingCompleted: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    intializeApp();
  }, []);

  async function intializeApp() {
    try {
      const onboardingCompleted = await onboardingStorage.isCompleted();

      setState({
        status: 'ready',
        onboardingCompleted,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error('App bootstrap failed:', error);

      setState({
        status: 'ready',
        onboardingCompleted: false,
        isAuthenticated: false,
      });
    }
  }
  const completeOnboarding = () => {
    setState(prev => ({ ...prev, onboardingCompleted: true }));
  };

  return { ...state, completeOnboarding };
};
