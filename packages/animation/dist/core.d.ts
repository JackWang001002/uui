import { default as anime } from "animejs";
export type AnimateParams = anime.AnimeParams;
export declare const animate: (...animeParams: AnimateParams[]) => anime.AnimeInstance | anime.AnimeInstance[];
export declare const useAnime: () => (...animeParams: AnimateParams[]) => anime.AnimeInstance | anime.AnimeInstance[];
