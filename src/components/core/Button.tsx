import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: var(--shora-primary, #2563eb);
          color: white;
          border: none;
          &:hover {
            background: var(--shora-primary-dark, #1d4ed8);
          }
        `;
      case 'secondary':
        return `
          background: var(--shora-secondary, #f3f4f6);
          color: var(--shora-text, #1f2937);
          border: none;
          &:hover {
            background: var(--shora-secondary-dark, #e5e7eb);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--shora-primary, #2563eb);
          border: 2px solid var(--shora-primary, #2563eb);
          &:hover {
            background: var(--shora-primary-light, #dbeafe);
          }
        `;
    }
  }}

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'medium':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <StyledButton
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="loading-spinner" />
          Loading...
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};
