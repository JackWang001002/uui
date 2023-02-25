/// <reference types="react" />
import { DropdownProps } from "@uui/ct-floating-ui";
export type SelectProps<T> = {
    selected?: T;
    selectBox: JSX.Element;
} & {
    children: JSX.Element;
} & Omit<DropdownProps, "overlay">;
export declare const Select: <T>(props: SelectProps<T>) => JSX.Element;
