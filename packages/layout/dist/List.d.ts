/// <reference types="react" />
import { IDable } from "@c3/types";
import { Color } from "@c3/utils";
import { StyledComponent } from "@yuejs/react";
import { CSSProperties } from "@yuejs/core";
export type BaseListItemType = IDable & {
    active?: boolean;
    renderItem?: <U extends BaseListItemType>(e: U, idx: number) => JSX.Element | null;
};
export type ListProps<T extends BaseListItemType> = {
    data: T[];
    direction?: "row" | "column";
    renderItem?: (item: T, idx: number) => JSX.Element;
    updateData: (newData: T[], prev: T[]) => void;
    onClick?: (e: MouseEvent) => void;
} & {
    divider?: Color;
    gap?: CSSProperties["gap"];
    className?: string;
};
export declare const List: StyledComponent;
