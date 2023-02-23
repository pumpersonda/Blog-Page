import { useState, useEffect } from 'react';
import { EMPTY_POST } from '../../../types';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';
import { Post } from '../../pages/PostEditDetails';
import './index.css';

export interface PostInformation {
  id?: string;
  title: string;
  description: string;
  author: string;
  imageURL: string;
  publishedOn: string;
}

export interface PostInformationFormProps {
  post?: Post;
  buttonText?: string;
  onSubmit: (post: Post) => void;
}

export function PostInformationForm({
  post,
  buttonText,
  onSubmit,
}: PostInformationFormProps) {
  const [newPost, setNewPost] = useState<Post>({ ...EMPTY_POST });

  useEffect(() => {
    if (post) {
      setNewPost({ ...post });
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

    setNewPost((prevPost: Post) => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = () => {
    onSubmit(newPost);
  };

  const isButtonDisabled = ()=>{
    return newPost.title === '' || newPost.description === '' || newPost.author === '' || newPost.imageURL === '';
  }

  return (
    <div className="post-information-form">
      <Label text={'Title'} inputId={titleId} />
      <Input
        id={titleId}
        {...{
          name: 'title',
          value: newPost.title,
          onChange: handleInputChange,
        }}
      />

      <Label text={'Description'} inputId={descriptionId} />
      <textarea
        id={descriptionId}
        name="description"
        cols={30}
        rows={10}
        value={newPost.description}
        onChange={handleInputChange}
      />

      <Label text={'Author'} inputId={authorId} />
      <Input
        id={authorId}
        {...{
          name: 'author',
          value: newPost.author,
          onChange: handleInputChange,
        }}
      />

      <Label text={'Image URL'} inputId={imageId} />
      <Input
        id={imageId}
        {...{
          name: 'imageURL',
          value: newPost.imageURL,
          onChange: handleInputChange,
        }}
      />

      <Button {...{ onClick: onSubmitHandler }} isDisabled={isButtonDisabled()}>
        {buttonText ? buttonText : 'CREATE'}
      </Button>
    </div>
  );
}
