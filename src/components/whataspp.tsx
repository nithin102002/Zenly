// components/WhatsAppIcon.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // You can use any icon library

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/your-phone-number" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;
