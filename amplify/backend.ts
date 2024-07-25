import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

// https://docs.amplify.aws/nextjs/build-a-backend/auth/modify-resources-with-cdk/#custom-attributes
const { cfnUserPool } = backend.auth.resources.cfnResources;
if (Array.isArray(cfnUserPool.schema)) {
  cfnUserPool.schema.push({
    name: 'connectedApis',
    attributeDataType: 'String',
    developerOnlyAttribute: false,
    mutable: true,
    required: false,
    stringAttributeConstraints: {
      maxLength: '256',
      minLength: '1',
    },
  });
}