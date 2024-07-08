'use client';
import { Authenticator, Text, View, useAuthenticator } from '@aws-amplify/ui-react';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const components = {
  Header() {
    return (
      <View textAlign='center'>
        <Text><span style={{color: 'white'}}>Authenticator Header</span></Text>
      </View>
    );
  },
};

function CustomAuthenticator() {
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      redirect('/');
    }
  }, [user]);

  return <Authenticator components={components} />;
}

/** @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-server-authentication-routes */
export default function Login() {
  return (
    <Authenticator.Provider>
      <CustomAuthenticator />
    </Authenticator.Provider>
  );
}