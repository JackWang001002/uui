import React from "react";
export type ButtonProps = {
    loading?: boolean;
    loadingIcon?: JSX.Element;
    preventDefault?: boolean;
    debounce?: number | boolean;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const _Button: React.FC<ButtonProps>;
export declare const Button: import("@yuejs/react").StyledComponent;
