import React from 'react';
import ReactDOM from 'react-dom';

export function Modal() {
  return ReactDOM.createPortal(
    <div>This is a modal</div>,
    document.getElementById('modal') as any,
  );
}
