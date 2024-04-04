import { useEffect } from 'react'
import { Hub } from 'aws-amplify/utils';
import { Amplify } from 'aws-amplify';
import config from '../../app/amplifyconfiguration.json';
Amplify.configure(config);

interface AuthEventListenerProps {
  onAuthStateChanged: (isSignedIn: boolean) => void;
}

const AuthEventListener: React.FC<AuthEventListenerProps> = ({ onAuthStateChanged }) => {
  useEffect(() => {
    const handleAuthStateChange = (signedIn: boolean) => {
      onAuthStateChanged(signedIn);
      localStorage.setItem('isSignedIn', signedIn ? 'true' : 'false');
    };

    // Check localStorage for initial authentication state
    const initialIsSignedIn = localStorage.getItem('isSignedIn') === 'true';
    onAuthStateChanged(initialIsSignedIn);

    const authListener = Hub.listen('auth', ({ payload }) => {
      const { event } = payload;
      if (event === 'signedIn') {
        handleAuthStateChange(true);
      } else if (event === 'signedOut') {
        handleAuthStateChange(false);
      }
    });

    return () => {
      authListener(); // Unsubscribe from the Hub event listener
    };
  }, [onAuthStateChanged]);

  // This component doesn't render anything, it just listens to authentication events
  return null;
};

export default AuthEventListener;

