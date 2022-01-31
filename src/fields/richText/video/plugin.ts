const withVideo = (incomingEditor) => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) => (element.type === 'video' ? true : isVoid(element));

  return editor;
};

export default withVideo;
