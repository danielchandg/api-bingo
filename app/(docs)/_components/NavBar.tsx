'use client';
import { Button, Divider, Flex, View, Heading } from '@aws-amplify/ui-react';
import { Spacer } from '@nextui-org/react';
import { signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();
  useEffect(() => {
    // https://docs.amplify.aws/gen1/react/build-a-backend/utilities/hub/
    const hubListenerCancel = Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signedIn':
          // something
          break;
        case 'signedOut':
          // something
          break;
      }
    })
  return () => hubListenerCancel();
  }, [router]);

  return (
    <Flex
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      padding='1.5rem'
      position='absolute'
      width='100%'
    >
      <View className='flex flex-row py-2 px-4 bg-gray-100 bg-opacity-20 rounded cursor-pointer'>
        <Image
          src='logo.svg'
          alt='logo'
          width={42}
          height={42}
          className='object-contain object-center -mt-2 -mb-2'
        />
        <Spacer x={3} />
        <Heading color='inherit' level={4}>
          API Docs
        </Heading>
      </View>
      <Image
        src='/pfp.jpg'
        height={40}
        width={40}
        alt='logo'
        className='object-contain object-center rounded-full cursor-pointer transition hover:ring-4 ring-offset-1 ring-offset-black'
      />
      
    </Flex>
  );

};