import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/amplify_outputs.json';
import { cookies } from 'next/headers';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { type Schema } from '@/amplify/data/resource';

/**
 * @description
 * When you make API calls from the server, surround it with this component.
 * It will prevent the API calls from being leaked to the frontend.
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/#configure-amplify-apis-for-server-side-usage
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#configure-amplify-server-side
 * @see https://youtu.be/_htSwKMdk2Y?si=zJw1SvF1L2QPcWDz&t=1463
*/
export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs
});

/**
 * @description Used to access the user's schema
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#create-a-new-to-do-item
 */
export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies
});

export const isAuthenticated = async () => (
  null
)