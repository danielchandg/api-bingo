'use client';
import { Button, Divider, Flex } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function NavBar({isSignedIn} : {isSignedIn: boolean}) {
  const [authCheck, setAuthCheck] = useState(isSignedIn);
  const router = useRouter();
  useEffect(() => {
    // https://docs.amplify.aws/gen1/react/build-a-backend/utilities/hub/
    const hubListenerCancel = Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signedIn':
          setAuthCheck(true);
          router.push('/');
          break;
        case 'signedOut':
          setAuthCheck(false);
          router.push('/');
          break;
      }
    })
  return () => hubListenerCancel();
  }, [router]);

  // Called when user clicks the Sign In/Sign Out button on the navbar.
  // If the user is signed in, sign out.
  // If the user is signed out, redirect to login page.
  const signOutSignIn = async () => {
    if (authCheck) {
      await signOut();
    }
    else {
      router.push('/login');
    }
  };

  const defaultRoutes = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/admin',
      label: 'Admin',
      loggedIn: true
    }
  ]

  const routes = defaultRoutes.filter(
    route => route.loggedIn === authCheck || route.loggedIn === undefined
  );

  return (
    <>
      <Flex
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='1rem'
      >
        <Flex as='nav' alignItems='center' gap='3rem' margin='0 2rem'>
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </Flex>
        <Button
          variation='primary'
          borderRadius='2rem'
          className='mr-4'
          onClick={signOutSignIn}
        >
          {authCheck ? 'Sign Out' : 'Sign In'}
        </Button>
      </Flex>
      <Divider size='small' />
    </>
  );

};