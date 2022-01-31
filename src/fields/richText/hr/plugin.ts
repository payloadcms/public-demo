const withHR = (incomingEditor) => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) => (element.type === 'hr' ? true : isVoid(element));

  return editor;
};

export default withHR;
