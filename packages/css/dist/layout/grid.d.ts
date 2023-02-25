import { CSSProperties } from "@yuejs/core";
export declare const nCol: (_num: number | number[], _cellWidth: CSSProperties["width"], cellHeight: CSSProperties["height"], rowGap?: CSSProperties["rowGap"], columnGap?: CSSProperties["columnGap"]) => {
    display: string;
    justifyContent: string;
    gridAutoRows: import("csstype").Property.Height<string | number> | undefined;
    gridTemplateColumns: string[];
    rowGap: import("csstype").Property.RowGap<string | number>;
    columnGap: import("csstype").Property.ColumnGap<string | number>;
};
