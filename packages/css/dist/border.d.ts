import { CSSProperties } from "@yuejs/core";
import { HVDirection } from "@c3/types";
export declare const borderRadiusForGroup: (borderRadius: CSSProperties["borderRadius"], direction: HVDirection) => {
    "& > *:first-child": {
        borderTopRightRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderTopLeftRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderBottomLeftRadius?: undefined;
    } | {
        borderTopLeftRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderBottomLeftRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderTopRightRadius?: undefined;
    };
    "& > *:last-child": {
        borderBottomLeftRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderBottomRightRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderTopRightRadius?: undefined;
    } | {
        borderBottomRightRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderTopRightRadius: import("csstype").Property.BorderRadius<string | number> | undefined;
        borderBottomLeftRadius?: undefined;
    };
};
export declare const gradientRoundedBorder: (bgColor: string, gradient: string) => CSSProperties;
export declare const roundBorderValue: (height: number) => number;
export declare const gradientBorder: (gradient: string) => CSSProperties;
