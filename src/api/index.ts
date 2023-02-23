import { Post } from "../components/pages/PostEditDetails";
import { getItem, setItem } from "../store";
import { StorageKey } from "../types";

export function fetchPostList(): Post[] {
  const data: Post[] = getItem(StorageKey.POSTS);
  return (!!data ? data : []) as Post[];
}

export function searchPostByName(title: string): Post[] {
  console.log(title);
  const data: Post[] = fetchPostList();
  return data.filter((post: Post) =>
    post.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );
}

export function savePost(postInformation: Post): string {
  const data: Post[] = fetchPostList();
  const uniqid = Date.now();
  postInformation.id = uniqid + "";
  data.push(postInformation);
  setItem(StorageKey.POSTS, data);
  return postInformation.id;
}

export function getPostById(id: string): Post | undefined {
  const data: Post[] = fetchPostList();
  return data.find((post: Post) => post.id === id);
}

export function updatePost(post: Post): void {
  const data: Post[] = fetchPostList();
  let index = 0;
  data.forEach((p: Post, i: number) => {
    if (p.id === post.id) {
      index = i;
    }
  });
  data[index] = post;
  setItem(StorageKey.POSTS, data);
}
