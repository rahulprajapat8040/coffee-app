import { OnboardingScreen } from '@/features/onboarding/screens/onboarding.screen';
import { MainNavigator } from './main-navigator';

interface Props {
  onboadingCompleted: boolean;
  isAuthenticated: boolean;
  onCompleteOnboarding: () => void;
}

export const AppNavigator = ({
  onboadingCompleted,
  onCompleteOnboarding,
  isAuthenticated,
}: Props) => {
  if (!onboadingCompleted) {
    return <OnboardingScreen onComplete={onCompleteOnboarding} />;
  }
  return <MainNavigator />;
};
