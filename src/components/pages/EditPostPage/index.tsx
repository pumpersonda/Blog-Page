import { useEffect, useState } from 'react';
import { getPostById, updatePost } from '../../../api';
import { Heading } from "../../atoms/Heading";
import { PostInformation, PostInformationForm } from '../../molecules/PostInformationForm';
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { PageTemplate } from "../../templates/PageTemplate";
import { useParams } from 'react-router-dom';
import '../NewPostPage/index.css';

// TODO create the atoms
export function EditPostPage() {
    const [currentPost, setCurrentPost] = useState<PostInformation>();
    const { id } = useParams();

    useEffect(()=>{
        if(id){
            const post: PostInformation = getPostById(id) as PostInformation;
            setCurrentPost({...post});
        }
       
    }, [id]);

    const onSubmitHandler = function(post: PostInformation){
        updatePost(post);
    }

    return <PageTemplate
    header={<Navbar/>}
    footer={<Footer/>}
    >
        <div className='post-container'>
            <Heading level={1}>Edit a Post</Heading>
            <PostInformationForm post={currentPost} onSubmit={onSubmitHandler} buttonText='UPDATE' />
        </div>       
    </PageTemplate>
}