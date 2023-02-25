import { CSSProperties } from "@yuejs/core";
export interface IYPosition {
    top?: CSSProperties["top"];
    bottom?: CSSProperties["bottom"];
}
export interface IXPosition {
    left?: CSSProperties["left"];
    right?: CSSProperties["right"];
}
export type IAbsPosition = "fixed" | "absolute";
export interface IPosition extends IXPosition, IYPosition {
}
export declare const supportIndivideTransform: boolean;
export declare const xCenter: (position: IAbsPosition) => (ypos?: IYPosition) => CSSProperties;
export declare const yCenter: (postion: IAbsPosition) => (xpos?: IXPosition) => CSSProperties;
export declare const xyCenter: (position: IAbsPosition) => () => CSSProperties;
export declare const absXCenter: (ypos?: IYPosition) => CSSProperties;
export declare const absYCenter: (xpos?: IXPosition) => CSSProperties;
export declare const absXYCenter: () => CSSProperties;
export declare const abs: ({ left, top, right, bottom }: IPosition) => CSSProperties;
export declare const leftTopCorner: CSSProperties;
export declare const rightTopCorner: CSSProperties;
export declare const rightBottomCorner: CSSProperties;
export declare const leftBottomCorner: CSSProperties;
