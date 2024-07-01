'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const AuthClient = () => {
  return (
    <Authenticator />
  );
};

export default AuthClient;