import { atom } from "jotai";

export const dataTitle = atom<string>("");
export const dataKeywordArr = atom<string>("");
export const dataSum = atom<string>("");
export const dataLink = atom<string>("");
//다른 곳에서 사용
export const userIdAtom = atom<number>(0);
