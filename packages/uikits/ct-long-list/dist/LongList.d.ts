/// <reference types="react" />
import { BaseListItemType, ListProps } from "@uui/layout";
export type LongListProps<T extends BaseListItemType> = {
    onNextPage: () => Promise<void>;
    loadingIcon?: JSX.Element;
    loading?: boolean;
    startPageNo: number;
} & ListProps<T>;
export declare const LongList: <T extends BaseListItemType>(props: LongListProps<T>) => JSX.Element;
