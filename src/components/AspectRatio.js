import React from 'react';

const AspectRatio = ({aspectRatio, children, style}) => (
  <div style={{position: "relative", paddingBottom: aspectRatio}}>
    <div style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', style}}>
      {children}
    </div>
  </div>
);

export default AspectRatio;