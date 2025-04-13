import React from 'react';
import Button from '../Button';

export default function Cta({ title, subTitle, bgUrl, btnUrl, btnText }) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        overflow: 'hidden',
        padding: '80px 20px',
        margin: '20px',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px', // Added padding for better spacing
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2',
            color: '#30c455', // Changed title color to gold
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.25rem',
            marginBottom: '30px',
            lineHeight: '1.6',
          }}
        >
          {subTitle}
        </p>
        <Button
          btnUrl={btnUrl}
          btnText={btnText}
          style={{
            padding: '15px 40px',
            fontSize: '1rem',
            fontWeight: '600',
            backgroundColor: '#30c455',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#28a745')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#30c455')}
        />
      </div>
    </div>
  );
}
