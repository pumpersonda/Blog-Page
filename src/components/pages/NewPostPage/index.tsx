import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, savePost, updatePost } from '../../../api';
import { Heading } from '../../atoms/Heading';
import { PostInformationForm } from '../../molecules/PostInformationForm';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';
import { Post } from '../PostEditDetails';
import './index.css';

// TODO create the atoms
export function NewPostPage() {
  const [currentPost, setCurrentPost] = useState<Post>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const post: Post = getPostById(id) as Post;
      setCurrentPost({ ...post });
    }
  }, [id]);

  const onSubmitHandler = function (post: Post) {
    if (id) {
      updatePost(post);
      navigate(`/Blog/edit/details/${id}`);
    } else {
      savePost(post);
    }
  };

  return (
    <PageTemplate header={<Navbar />} footer={<Footer />}>
      <div className="post-container">
        <Heading level={1}>Create a new Post</Heading>
        <PostInformationForm post={currentPost} onSubmit={onSubmitHandler} />
      </div>
    </PageTemplate>
  );
}
