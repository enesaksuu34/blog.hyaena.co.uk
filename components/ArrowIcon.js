import React from 'react';

export default function Logo({ className }) {
  const logoUrl = 'https://img.hyaena.co.uk/hlogo.png';

  return (
    <img
        src={logoUrl}
        alt="Logo"
        width="24"
        height="24"
        className={className}
    />
  );
}