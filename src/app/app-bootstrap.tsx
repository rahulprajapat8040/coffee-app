import { useAppBootstrap } from './hooks/use-app-bootstrap';
import { AppNavigator } from './navigation/app-navigator';

export const AppBootstrap = () => {
  const { status, onboardingCompleted, isAuthenticated, completeOnboarding } =
    useAppBootstrap();

  if (status === 'loading') {
    return null;
  }

  return (
    <AppNavigator
      isAuthenticated={isAuthenticated}
      onboadingCompleted={onboardingCompleted}
      onCompleteOnboarding={completeOnboarding}
    />
  );
};
