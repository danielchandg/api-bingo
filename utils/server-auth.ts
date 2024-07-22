/**
 * Supported functions:
 * - fetchAuthSession, fetchUserAttributes, and getCurrentUser
 * Docs:
 * - https://docs.amplify.aws/react/build-a-backend/server-side-rendering/#calling-amplify-category-apis-on-the-server-side
 * - https://docs.amplify.aws/react/build-a-backend/server-side-rendering/#supported-apis-for-nextjs-server-side-usage
 * Static vs. Dynamic Rendering
 * - Server components that rely on user session should be dynamically rendered.
 * - Otherwise, they can be statically rendered.
 */

import { cookies } from 'next/headers';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/amplify-utils';

/** @see https://docs.amplify.aws/react/build-a-backend/server-side-rendering/#with-nextjs-app-router */
export async function getCurrentUserServer() {
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });
  return currentUser;
}

export async function getUserAttributesServer() {
  const userAttributes = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => fetchUserAttributes(contextSpec)
  });
  return userAttributes;
}
