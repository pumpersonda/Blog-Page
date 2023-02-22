import { PostItemProps } from "../components/molecules/PostItem";
import { getItem } from "../store";
import { StorageKey } from "../types";

export function fetchPostList(): PostItemProps[] {
  const data = getItem(StorageKey.POSTS);
  return (!!data ? data : []) as PostItemProps[];
}
