import { savePost } from '../../../api';
import { Heading } from "../../atoms/Heading";
import { PostInformation, PostInformationForm } from '../../molecules/PostInformationForm';
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { PageTemplate } from "../../templates/PageTemplate";
import './index.css';

// TODO create the atoms
export function NewPostPage() {

    const onSubmitHandler = function(post: PostInformation){
        savePost(post);
    }

    return <PageTemplate
    header={<Navbar/>}
    footer={<Footer/>}
    >
        <div className='post-container'>
            <Heading level={1}>Create a new Post</Heading>
            <PostInformationForm onSubmit={onSubmitHandler} />
        </div>       
    </PageTemplate>
}