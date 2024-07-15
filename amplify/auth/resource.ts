import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 * @see https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-authentication
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome! Verify your email!',
      verificationEmailBody(createCode: () => string) {
        return `Welcome to API Bingo! Your verification code is ${createCode()}`
      },
      verificationEmailStyle: 'CODE',
    },
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
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/modify-resources-with-cdk/#custom-attributes
   */
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false
    },
    profilePicture: {
      mutable: true,
      required: false
    },
  },
  /**
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/multi-factor-authentication/#configure-multi-factor-authentication
   * https://docs.amplify.aws/nextjs/build-a-backend/auth/concepts/multi-factor-authentication/#set-up-totp-for-a-user
   */
  multifactor: {
    mode: 'OPTIONAL',
    totp: true
  },
});
