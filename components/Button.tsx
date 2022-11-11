import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
    onClick: Function;
}

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
    background: #000;
    border: 1px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: var(--font-base-lgmd);
    font-weight: 600;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #252525;
        transition: all 0.2s ease-in-out;
    }
`

export default Button