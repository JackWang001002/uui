import { Placement } from "@c3/types";
/**
 * NOTE: the parent element must be relative
 *
 * @param ele :the action element
 * @param placement
 * @returns
 */
export declare const getPopoverPos: (placement: Placement, parentBoxW?: number | string, parentBoxH?: number | string) => import("@yuejs/core").CSSProperties;
