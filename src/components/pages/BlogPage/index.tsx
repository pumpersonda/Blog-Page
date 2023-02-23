import React, { useEffect, useState } from 'react';
import { fetchPostList } from '../../../api';
import { PageTemplate } from '../../templates/PageTemplate';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { useNavigate } from 'react-router-dom';
import { PostList } from '../../organisms/PostList';
import { Button } from '../../atoms/Button';
import { Post } from '../PostEditDetails';

export function BlogPage() {
  const [postList, setPostList] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = fetchPostList();
    setPostList([...data]);
  }, []);

  const handleClick = () => {
    navigate('new');
  };

  return (
    <PageTemplate header={<Navbar />} footer={<Footer />}>
      <Button {...{ onClick: handleClick }}>Create new Post</Button>
      <PostList posts={postList} />
    </PageTemplate>
  );
}
