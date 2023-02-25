import { Placement } from "@floating-ui/react-dom-interactions";
import React from "react";
export type Trigger = "click" | "hover" | "focus";
export type FloatingProps = {
    overlay: JSX.Element;
    visible: boolean;
    trigger?: Trigger | Trigger[];
    placement?: Placement;
    onToggle?: (isOpen: boolean) => Promise<void> | void;
    withArrow?: boolean;
    offset?: number;
    flip?: boolean;
    anime?: (visible: boolean, placement: Placement, targets: anime.AnimeParams["targets"]) => void;
} & {
    children: JSX.Element;
    as?: any;
};
export declare const Floating: React.FC<FloatingProps>;
