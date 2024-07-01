'use client';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';

const AuthProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  )
};

export default AuthProvider;