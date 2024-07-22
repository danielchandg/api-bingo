import { confirmUserAttribute, updateUserAttribute, fetchUserAttributes } from 'aws-amplify/auth';

/** @see https://docs.amplify.aws/nextjs/build-a-backend/auth/connect-your-frontend/manage-user-attributes/#update-user-attribute */
export async function updateEmail(email: string) {

  // Update email attribute
  const output = await updateUserAttribute({
    userAttribute: { attributeKey: 'email', value: email }
  });

  // Since the user has to confirm email change, the user receives an email with a confirmation code
  if (output.nextStep.updateAttributeStep !== 'CONFIRM_ATTRIBUTE_WITH_CODE') {
    throw new Error(`updateEmail: Unexpected step ${output.nextStep.updateAttributeStep}`);
  }

  const codeDeliveryDetails = output.nextStep.codeDeliveryDetails;
  console.log(
    `updateEmail: Confirmation code via ${codeDeliveryDetails?.deliveryMedium}
    to ${codeDeliveryDetails?.destination}.`
  );
}

/** @see https://docs.amplify.aws/nextjs/build-a-backend/auth/connect-your-frontend/manage-user-attributes/#verify-user-attribute */
export async function confirmUpdateEmail(confirmationCode: string) {
  await confirmUserAttribute({ userAttributeKey: 'email', confirmationCode });
}

export async function updateProfilePicture(profilePicture: string) {
  const res = await updateUserAttribute({
    userAttribute: {
      attributeKey: 'profilePicture',
      value: profilePicture
    }
  });
  if (!res.isUpdated) {
    throw new Error(`updateProfilePicture: Failed to save`);
  }
}

export async function addConnectedApi(api: string) {
  api = api.toLowerCase();
  const { profile: connectedApis } = await fetchUserAttributes();
  if (connectedApis?.includes(api)) {
    throw new Error(`addConnectedApi: ${api} is already connected`);
  }
  const res = await updateUserAttribute({
    userAttribute: {
      attributeKey: 'profile',
      value: (connectedApis ? connectedApis + ' ' : '') + api
    }
  });
  if (!res.isUpdated) {
    throw new Error(`addConnectedApi: Failed to save`);
  }
}

export async function removeConnectedApi(api: string) {
  api = api.toLowerCase();
  const { profile: connectedApis } = await fetchUserAttributes();
  if (!connectedApis || !connectedApis.includes(api)) {
    throw new Error(`removeConnectedApi: ${api} is not connected`);
  }
  const res = await updateUserAttribute({
    userAttribute: {
      attributeKey: 'profile',
      value: connectedApis.replace(api, '').replace('  ', ' ').trim()
    }
  });
  if (!res.isUpdated) {
    throw new Error(`removeConnectedApi: Failed to save`);
  }
}