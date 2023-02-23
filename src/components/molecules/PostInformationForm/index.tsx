import { useState, useEffect } from 'react'; 
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import './index.css';

export interface PostInformation{
    id?:string;
    title: string;
    description: string;
    author: string;
    imageURL: string;
    publishedOn: string;
}

export interface PostInformationFormProps {
    post?: PostInformation;
    buttonText?: string;
    onSubmit: (post: PostInformation) => void 
}

export function PostInformationForm({ 
        post,
        buttonText, 
        onSubmit 
    } :PostInformationFormProps) {
        const [newPost ,setNewPost] = useState<PostInformation>({
            title: '',
            description: '',
            author: '',
            imageURL: '',
            publishedOn: ''
        });


    useEffect(()=>{
        if(post){
            setNewPost({...post});
        }
    }, [post]);
    
    
    const titleId = 'title-id';
    const descriptionId = 'description-id';
    const authorId = 'author-id';
    const imageId = 'imageId';

    const handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setNewPost((prevPost: PostInformation) => {
            return {
                ...prevPost,
                [name]: value,
            }
        });

    }
    
    const onSubmitHandler = () => {
        onSubmit(newPost);
    }

    return (

        <div className="post-information-form">
            <Label text={'Title'} inputId={titleId} />
            <Input id={titleId} {...{name: 'title', value: newPost.title, onChange: handleInputChange}} />

            <Label text={'Description'} inputId={descriptionId} />
            <textarea id={descriptionId} name="description" cols={30} rows={10} value={newPost.description} onChange={handleInputChange} />

            <Label text={'Author'} inputId={authorId} />
            <Input id={authorId} {...{name: 'author', value: newPost.author, onChange: handleInputChange}} />

            <Label text={'Image URL'} inputId={imageId} />
            <Input id={imageId} {...{name: 'imageURL', value: newPost.imageURL, onChange: handleInputChange}}/>

            <Button {...{onClick: onSubmitHandler}}>{(buttonText ? buttonText : 'CREATE' )}</Button>
    </div>
    )
}