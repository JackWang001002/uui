import { AnimateParams } from "./core";
export type Fn = (params: AnimateParams) => anime.AnimeInstance;
export declare const zoom: Record<string, Fn>;
