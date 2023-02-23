import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../api';
import { EMPTY_POST } from '../../../types';
import { Heading } from '../../atoms/Heading';
import { PostInformation } from '../../molecules/PostInformationForm';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';
import './index.css';


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
    <PageTemplate header={<Navbar />} footer={<Footer />} >
      <div className='post-detail__container'>
        <div className='post-detail__title'>{currentPost?.title}</div>
        <div className='post-detail__author'>{currentPost?.author}</div>
        <div className='post-detail__date'>{currentPost?.publishedOn}</div>
        <section className='post-detail__content'>{currentPost?.content}</section>
      </div>
    </PageTemplate>
  );
}
