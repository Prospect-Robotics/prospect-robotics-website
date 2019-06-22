import React from 'react';

import '../styles/button.css';

const Button = ({style, onClick, href, children}) => {
  return (
    <button className={['button', style === 'underline' ? 'underline' : ''].join(' ')} onClick={onClick}>
      {href ? (
        <a href={href}>
          {children}
        </a>
      ) : children}</button>
  )
};

export default Button;
