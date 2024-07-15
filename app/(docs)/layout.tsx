'use client';
import React from 'react';
import { Flex, Link } from '@aws-amplify/ui-react';

export default function Layout() {
  return (
    <Flex
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      padding='1rem'
      position='absolute'
    >
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/strava'>
        <a>Strava</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </Flex>
  );
}