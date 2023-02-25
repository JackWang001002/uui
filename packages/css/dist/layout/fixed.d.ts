import { CSSProperties } from "@yuejs/core";
import { IPosition } from "./abs";
export declare const fixed: (pos: IPosition) => CSSProperties;
export declare const fixedXCenter: (ypos?: import("./abs").IYPosition | undefined) => CSSProperties;
export declare const fixedYCenter: (xpos?: import("./abs").IXPosition | undefined) => CSSProperties;
export declare const fixedXYCenter: () => CSSProperties;
