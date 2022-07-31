import React from "react";
import styles from './Button.module.css'

interface Tbutton extends React.CSSProperties {
children: React.ReactNode;
onClick: () => void;
className?: string;
}

const Button = ({ width, children, onClick, className = 'default' }: Tbutton) => {
    return (
        <button onClick={onClick} className={styles[className]} style={{width: `${width}`}}>
            {children}
        </button>
    );
}

export default Button;