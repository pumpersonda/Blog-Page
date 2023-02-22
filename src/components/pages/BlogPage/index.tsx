import React, { useEffect, useState } from 'react';
import { fetchPostList } from '../../../api';
import { PageTemplate } from "../../templates/PageTemplate";
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { Heading } from '../../atoms/Heading';
import { PostItemProps } from "../../molecules/PostItem";
import { PostList } from "../../organisms/PostList";
import { Button } from '../../atoms/Button';

export function BlogPage(){
    const [postList, setPostList] = useState<PostItemProps[]>([]);

    useEffect(() => {
        const data = fetchPostList();
        setPostList([...data]);
    }, []);
    return (
        <PageTemplate
            header={<Navbar/>}
            footer={<Footer/>}
        >
            <Button>Create new Post</Button>
            <PostList posts={postList} />
        </PageTemplate>
    );
}