import { INITIAL_POST_LIST } from "./data";
import { setItem, getItem } from "./store";
import { StorageKey } from "./types";

export function initializeInformation() {
  const data = getItem(StorageKey.POSTS);
  if (!data) {
    setItem(StorageKey.POSTS, INITIAL_POST_LIST);
  }
}
