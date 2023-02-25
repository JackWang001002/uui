/// <reference types="react" />
import { NavItemType, NavProps } from "./Switcher";
export declare const SideBar: <T extends NavItemType>(props: Omit<NavProps<T>, "direction">) => JSX.Element;
export declare const Menus: <T extends NavItemType>(props: NavProps<T>) => JSX.Element;
export declare const Tabs: <T extends NavItemType>(props: Omit<NavProps<T>, "direction">) => JSX.Element;
