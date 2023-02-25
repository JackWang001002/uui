import { BaseListItemType } from "@uui/layout";
export type useStepOption<T extends BaseListItemType> = {
    data: T[];
    updateData: (newData: T[], prev: T[]) => void;
};
export declare const useSteps: <T extends BaseListItemType>(props: useStepOption<T>) => {
    readonly goNext: () => void;
    readonly goPrev: () => void;
    readonly goTo: (idx: number) => void;
    readonly activeIndex: number;
    readonly nextIndex: number;
    readonly prevIndex: number;
};
