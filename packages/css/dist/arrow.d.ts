import { CSSPropertiesComplex } from "@yuejs/core";
import { Direction } from "@c3/types";
import { CSSProperties } from "@yuejs/core";
export declare const arrow: (direction: "top" | "right" | "bottom" | "left") => CSSProperties;
export declare const pseudoArrow: (direction: Direction, width: number, height: number, css?: CSSProperties) => CSSPropertiesComplex;
