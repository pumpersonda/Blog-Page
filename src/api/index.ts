import { PostInformation } from "../components/molecules/PostInformationForm";
import { getItem, setItem } from "../store";
import { StorageKey } from "../types";

export function fetchPostList(): PostInformation[] {
  const data: PostInformation[] = getItem(StorageKey.POSTS);
  return (!!data ? data : []) as PostInformation[];
}

export function savePost(postInformation: PostInformation): void {
  const data: PostInformation[] = fetchPostList();
  data.push(postInformation);
  setItem(StorageKey.POSTS, data);
}

export function getPostById(id: string): PostInformation | undefined {
  const data: PostInformation[] = fetchPostList();
  return data.find((post: PostInformation) => {
    return post.id === id;
  });
}

export function updatePost(post: PostInformation): void {
  const data: PostInformation[] = fetchPostList();
  let index = 0;
  data.forEach((p: PostInformation, i: number) => {
    if (p.id === post.id) {
      index = i;
    }
  });
  data[index] = post;
  setItem(StorageKey.POSTS, data);
}
