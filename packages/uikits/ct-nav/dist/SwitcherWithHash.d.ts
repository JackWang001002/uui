/// <reference types="react" />
import { NavItemType, NavProps } from "./Switcher";
type SwitchWithHashProps<T extends NavItemType> = NavProps<T>;
export declare const SwitchWithHash: <T extends NavItemType>(props: SwitchWithHashProps<T>) => JSX.Element;
export {};
