import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-authentication
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome! Verify your email!'
    },
    externalProviders: {
      callbackUrls: [
        'http://localhost:3000/login'
      ],
      logoutUrls: [
        'http://localhost:3000/logout'
      ]
    }
  },
});
