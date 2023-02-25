import { HVDirection } from "@c3/types";
export declare const borderRadiusForGroup: (borderRadius: CSSProperties, direction: HVDirection) => {
    "& > *:first-child": {
        borderTopRightRadius: CSSProperties;
        borderTopLeftRadius: CSSProperties;
        borderBottomLeftRadius?: undefined;
    } | {
        borderTopLeftRadius: CSSProperties;
        borderBottomLeftRadius: CSSProperties;
        borderTopRightRadius?: undefined;
    };
    "& > *:last-child": {
        borderBottomLeftRadius: CSSProperties;
        borderBottomRightRadius: CSSProperties;
        borderTopRightRadius?: undefined;
    } | {
        borderBottomRightRadius: CSSProperties;
        borderTopRightRadius: CSSProperties;
        borderBottomLeftRadius?: undefined;
    };
};
export declare const gradientRoundedBorder: (bgColor: string, gradient: string) => CSSProperties;
export declare const roundBorderValue: (height: number) => number;
export declare const gradientBorder: (gradient: string) => CSSProperties;
