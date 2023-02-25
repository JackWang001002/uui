import { Placement } from "@c3/types";
export declare const divider: (color: CSSProperties) => {
    "& > *:not(:last-child)": {
        borderBottom: string;
    };
};
export declare const divider_p: (color: string) => {
    "& > *:not(:last-child)::after": {
        width: string;
        backgroundColor: string;
        height: string;
    };
};
export declare const dividerAt: (placement: Placement, css: CSSProperties) => {
    _after: any;
};
