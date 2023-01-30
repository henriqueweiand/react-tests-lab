import React, { ButtonHTMLAttributes } from 'react';

// import styles from './index.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children = 'OK', ...rest }) => {
    return (
        <button {...rest}>{children}</button>
    );
}

export default Button;