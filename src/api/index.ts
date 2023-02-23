import { PostInformation } from "../components/molecules/PostInformationForm";
import { getItem, setItem } from "../store";
import { StorageKey } from "../types";

export function fetchPostList(): PostInformation[] {
  const data: PostInformation[] = getItem(StorageKey.POSTS);
  return (!!data ? data : []) as PostInformation[];
}

export function savePost(postInformation: PostInformation): void {
  const data: PostInformation[] = getItem(StorageKey.POSTS);
  data.push(postInformation);
  setItem(StorageKey.POSTS, data);
}
