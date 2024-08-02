import React from 'react';

function Logo({ src, alt }) {
  return (
    <img className="h-8 mx-3" src={src} alt={alt} />
  );
}

export default Logo;