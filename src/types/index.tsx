import { Post } from '../components/pages/PostEditDetails';

export enum StorageKey {
  POSTS = 'POSTS',
}

export const EMPTY_POST: Post = {
  title: '',
  description: '',
  author: '',
  imageURL: '',
  publishedOn: '',
  content: '',
};
