import React from 'react';

import './index.scss';

const baseClass = 'rich-text-hr';

const ButtonElement: React.FC<{ children: React.ReactNode, attributes: any, element: any }> = ({ attributes, children, element }) => {
  return (
    <div
      contentEditable={false}
    >
      <span
        {...attributes}
        className={baseClass}
      >
        <hr className={baseClass} />
        {children}
      </span>
    </div>
  );
};
export default ButtonElement;
