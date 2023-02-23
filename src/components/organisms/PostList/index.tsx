import { PostInformation } from '../../molecules/PostInformationForm';
import { PostItem } from '../../molecules/PostItem';

export interface PostListProps {
  posts: PostInformation[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem {...post} />;
        })
      ) : (
        <p>No posts at this moment</p>
      )}
    </div>
  );
}
