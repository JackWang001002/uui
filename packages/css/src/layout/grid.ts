import { toArray } from "@c3/utils";
import { CSSProperties } from "@yuejs/core";
export const nCol = (
  _num: number | number[],
  _cellWidth: CSSProperties["width"],
  cellHeight: CSSProperties["height"],
  rowGap: CSSProperties["rowGap"] = 0,
  columnGap: CSSProperties["columnGap"] = 0
) => {
  const nums = toArray(_num);
  const cellWidths = toArray(_cellWidth);
  if (nums.length !== cellWidths.length) {
    throw new Error("must have same length");
  }
  return {
    display: "grid",
    justifyContent: "center",
    gridAutoRows: cellHeight,
    gridTemplateColumns: nums.map(
      (e, idx) => `repeat(${e}, ${cellWidths[idx]})`
    ),
    rowGap,
    columnGap,
  };
};
