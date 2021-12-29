import React from 'react';
import '../styles/Button.css';

interface buttonProps {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle: string;
  buttonSize: string;
}

const STYLES: Array<string> = ['btn--primary', 'btn--outline'];
const SIZES: Array<string> = ['btn--medium', 'btn--large'];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: buttonProps) {
  const btnStyles: string = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const btnSizes: string = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a href="#Home" className="btn-mobile">
      <button
        className={`btn ${btnStyles} ${btnSizes}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
}
