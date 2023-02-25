/// <reference types="react" />
import { Fn } from "@c3/types";
import { ModalProps } from "./Modal";
export declare const useModal: (props: Omit<ModalProps, "visible" | "onClose" | "onCancel" | "onOK">, options?: {
    afterDisappear?: Fn;
    beforeAppear?: Fn;
    useAnimation?: boolean;
}) => readonly [JSX.Element, () => Promise<void>, () => Promise<void>, boolean];
