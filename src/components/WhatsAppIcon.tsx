// components/WhatsAppIcon.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Make sure this import is correct

const WhatsAppIcon = () => {
  return (
    <a
      href=" https://wa.me/6379645725" // Updated link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '15px', // Increased padding for better touch targets
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;
