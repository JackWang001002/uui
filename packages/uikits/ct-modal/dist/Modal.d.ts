import { CSSPropertiesComplex } from "@yuejs/core";
import React from "react";
export type ModalProps = {
    visible: boolean;
    closeBtn?: JSX.Element;
    okBtn?: JSX.Element;
    cancelBtn?: JSX.Element;
    body: JSX.Element;
    css: CSSPropertiesComplex;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Modal: React.ForwardRefExoticComponent<{
    visible: boolean;
    closeBtn?: JSX.Element | undefined;
    okBtn?: JSX.Element | undefined;
    cancelBtn?: JSX.Element | undefined;
    body: JSX.Element;
    css: CSSPropertiesComplex;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
