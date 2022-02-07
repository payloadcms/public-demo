export function mailingListFormData() {
  return {
    title: 'Mailing List',
    fields: [
      {
        name: 'first',
        label: 'First Name',
        width: 100,
        required: true,
        id: '61f9db02bc509803a05585db',
        blockName: 'First Name',
        blockType: 'text',
      },
      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: true,
        id: '61f9db45bc509803a05585dd',
        blockName: 'Email',
        blockType: 'email',
      },
    ],
    submitButtonLabel: 'Join Mailing List',
    confirmationType: 'message',
    confirmationMessage: [
      {
        type: 'p',
        children: [
          {
            text: 'Successfully joined mailing list!',
          },
        ],
      },
    ],
    redirect: {
      type: 'reference',
    },
    emails: [],
    createdAt: '2022-02-02T01:23:33.953Z',
    updatedAt: '2022-02-02T01:23:33.953Z',
  };
}
