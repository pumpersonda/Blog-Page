import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../api';
import { EMPTY_POST } from '../../../types';
import { Heading } from '../../atoms/Heading';
import { PostInformation } from '../../molecules/PostInformationForm';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';

export interface Post extends PostInformation {
  content: string;
}

export function PostDetails() {
  const [currentPost, setCurrentPost] = useState<Post>({ ...EMPTY_POST });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const post: Post = getPostById(id) as Post;
      setCurrentPost({ ...post });
    }
  }, [id]);

  return (
    <PageTemplate header={<Navbar />} footer={<Footer />}>
      <Heading level={1}>{currentPost?.title}</Heading>
      <Heading level={5}>{currentPost?.author}</Heading>
      <Heading level={6}>{currentPost?.publishedOn}</Heading>
      <section>{currentPost?.content}</section>
    </PageTemplate>
  );
}
