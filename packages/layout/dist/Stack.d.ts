import { StyledComponent } from "@yuejs/react";
import { CSSPropertiesComplex } from "@yuejs/core";
import React from "react";
export type StackProps = {
    body: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    css?: CSSPropertiesComplex;
    as?: string;
} & {
    children?: React.ReactElement[];
};
export declare const Stack: StyledComponent;
