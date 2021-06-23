import React, { VFC } from 'react';
import { ButtonProps } from '../types/props/ButtonProps';

const Button: VFC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const baseButton = 'rounded-full font-bold focus:outline-none';
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : '';
  return primary ? (
    <div>
      <button
        type="button"
        className={`text-white bg-green-500 hover:bg-green-600 ${baseButton} ${sizeMode}`}
        {...props}
      >
        {label}
      </button>
    </div>
  ) : (
    <button
      type="button"
      className={`text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
