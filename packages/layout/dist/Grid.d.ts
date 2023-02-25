/// <reference types="react" />
import { StyledComponent } from "@yuejs/react";
import { BaseListItemType } from "./List";
export type GridProps<T extends BaseListItemType = any> = {
    data: T[];
    renderItem?: (item: T, idx: number) => JSX.Element;
};
export declare const Grid: StyledComponent;
