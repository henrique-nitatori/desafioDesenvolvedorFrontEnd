import React from 'react';

import '../styles/components/Button.css';

interface Button {
    buttonText: string
    onClick: () => void
    type?: 'submit' | 'reset' | 'button';
  }

const button: React.FC<Button> = ({ buttonText, onClick, type = "button" }: Button) => {
  return (
    <button onClick={onClick} type={type} className="custom-button">{buttonText}</button>
  );
}

export default button;