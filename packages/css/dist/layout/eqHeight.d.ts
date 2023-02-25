/**
 * child div height can not be 100% when height of parent is auto
 * @returns
 */
export declare const eqHeight: () => {
    display: string;
    alignItems: string;
    "&& > *": {
        height: string;
    };
};
