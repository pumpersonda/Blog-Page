import { INITIAL_POST_LIST } from "./data";
import { setItem } from "./store";
import { StorageKey } from "./types";

export function initializeInformation() {
  setItem(StorageKey.POSTS, INITIAL_POST_LIST);
}
