/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import VideoIcon from '../Icon';

import './index.scss';

const baseClass = 'rich-text-video';

const sourceLabels = {
  youtube: 'YouTube',
  vimeo: 'Vimeo',
};

const Element = (props) => {
  const { attributes, children, element } = props;
  const { source, id } = element;
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div
      className={[
        baseClass,
        (selected && focused) && `${baseClass}--selected`,
      ].filter(Boolean).join(' ')}
      contentEditable={false}
      {...attributes}
    >
      <VideoIcon />
      <div className={`${baseClass}__wrap`}>
        <div className={`${baseClass}__label`}>
          {sourceLabels[source]}
          {' '}
          Video
        </div>
        <h5>{id}</h5>
      </div>
      {children}
    </div>
  );
};

export default Element;
