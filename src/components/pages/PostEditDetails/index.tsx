import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, updatePost } from '../../../api';
import { EMPTY_POST } from '../../../types';
import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import { PostInformation } from '../../molecules/PostInformationForm';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';
import '../PostDetails/index.css';

export interface Post extends PostInformation {
  content: string;
}

export function PostEditDetails() {
  const [currentPost, setCurrentPost] = useState<Post>({ ...EMPTY_POST });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const post: Post = getPostById(id) as Post;
      setCurrentPost({ ...post });
    }
  }, [id]);

  const onChangeHandler = (event: any) => {
    setCurrentPost((prevState: Post) => {
      return {
        ...prevState,
        content: event.target.value,
      };
    });
  };

  const onSubmitHandler = function () {
    updatePost(currentPost);
    navigate(`/Blog/post/${id}`);
  };

  return (
    <PageTemplate header={<Navbar />} footer={<Footer />}>
      <div className="post-detail__container--edit">
        <div className="post-detail__title">{currentPost?.title}</div>
        <div className="post-detail__author">{currentPost?.author}</div>
        <div className="post-detail__date">{currentPost?.publishedOn}</div>
        <div className="post-content--input">
          <textarea
            name="edit"
            id="edit"
            cols={60}
            rows={20}
            value={currentPost?.content}
            onChange={onChangeHandler}
          />
          <Button {...{ onClick: onSubmitHandler }}>UPDATE</Button>
        </div>
      </div>
    </PageTemplate>
  );
}
