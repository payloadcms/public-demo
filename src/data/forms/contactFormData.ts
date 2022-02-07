export function contactFormData() {
  return {
    title: 'Contact Form',
    fields: [
      {
        name: 'first',
        label: 'First Name',
        width: 50,
        required: true,
        id: '61f9db02bc509803a05585db',
        blockName: 'First Name',
        blockType: 'text',
      },
      {
        name: 'last',
        label: 'Last Name',
        width: 50,
        required: true,
        id: '61f9db2bbc509803a05585dc',
        blockName: 'Last Name',
        blockType: 'text',
      },
      {
        name: 'email',
        label: 'Email',
        width: 50,
        required: true,
        id: '61f9db45bc509803a05585dd',
        blockName: 'Email',
        blockType: 'email',
      },
      {
        id: '61f9db92bc509803a05585df',
        blockType: 'message',
      },
    ],
    submitButtonLabel: 'Submit',
    confirmationType: 'message',
    confirmationMessage: [
      {
        type: 'p',
        children: [
          {
            text: 'Form successfully submitted!',
          },
        ],
      },
    ],
    redirect: {
      type: 'reference',
    },
    emails: [],
    createdAt: '2022-02-02T01:17:22.762Z',
    updatedAt: '2022-02-02T01:18:22.633Z',
  };
}
