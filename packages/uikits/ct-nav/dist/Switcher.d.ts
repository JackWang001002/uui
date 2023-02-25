import { BaseListItemType } from "@uui/layout";
import React from "react";
export type NavItemType = {
    active: boolean;
    renderContent?: <U>(item: U) => React.ReactNode;
} & BaseListItemType;
export type MenuConfig<T extends NavItemType> = T[];
export type NavProps<T extends NavItemType> = {
    direction: "row" | "column";
    menuConfig: MenuConfig<T>;
    updateConfig: (config: MenuConfig<T>) => void;
    renderItem: (item: T) => React.ReactNode;
    renderContent?: (item: T) => React.ReactNode;
};
export declare const Nav: <T extends NavItemType>(props: NavProps<T>) => JSX.Element;
