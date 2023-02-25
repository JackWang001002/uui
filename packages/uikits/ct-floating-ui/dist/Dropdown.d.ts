import React from "react";
import { FloatingProps } from "./Base";
export type DropdownProps = Omit<FloatingProps, "visible">;
export declare const Dropdown: React.FC<DropdownProps>;
