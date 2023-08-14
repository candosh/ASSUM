import { atom } from "jotai";

export const tmpState = atom<string>("임시 아톰");
/**
 * 사용법
 * 필요한 곳에가서
 * const [tmp, setTmp] = useAtom(tmpState);
 * 하고, useState와 동일하게 사용하면 된다.
 */