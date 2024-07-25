import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-authentication
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome to API Bingo',
      verificationEmailBody(createCode: () => string) {
        return `Welcome to API Bingo! Your verification code is ${createCode()}`
      },
      verificationEmailStyle: 'CODE',
    },
    // https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/external-identity-providers/
    // https://docs.amplify.aws/react/deploy-and-host/fullstack-branching/secrets-and-vars/#set-secrets
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        // https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/external-identity-providers/#customizing-scopes-for-retrieving-user-data-from-external-providers
        scopes: ['email'],  
        // https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/external-identity-providers/#attribute-mapping
        attributeMapping: {
          email: 'email'
        }
      },
      callbackUrls: [
        'http://localhost:3000/login'
      ],
      logoutUrls: [
        'http://localhost:3000/logout'
      ]
    }
  },
  /**
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/user-attributes/
   * Note: Don't add things here - https://stackoverflow.com/a/62302382
   */
  userAttributes: {},
  /**
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/multi-factor-authentication/#configure-multi-factor-authentication
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/multi-factor-authentication/#set-up-totp-for-a-user
   */
  multifactor: {
    mode: 'OPTIONAL',
    totp: true
  },
});
