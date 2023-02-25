import React from "react";
export type InputProps = {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    allowClear?: boolean;
    status?: "warning" | "error" | "success";
} & JSX.IntrinsicElements["input"];
export declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
