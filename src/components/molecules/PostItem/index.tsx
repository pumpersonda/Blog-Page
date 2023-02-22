import { Button, ButtonTypes } from '../../atoms/Button';
import './index.css';

export interface PostItemProps {
    id: string;
    publishedOn: string;
    imageUrl: string;
    title: string;
    description: string;
    author: string;
}

export function PostItem({ id, publishedOn, imageUrl, title, description, author }: PostItemProps){
    return <div className='card-item'>
        <Button type={ButtonTypes.Link} href={`/Blog/post/${id}`}>
            <img src={imageUrl} alt="" height="200" width="200"/>
        </Button>
        <div className='card-item__text'>
            <div className='card-text__date'>{publishedOn}</div>
            <div className='card-text__heading'>{title}</div>
            <div className='card-text__description'>{description}</div>
            <div className='card-text__author'>{author}</div>
        </div>
        <div className='card-item__options'>
            <Button>Edit</Button>
        </div>
    </div>;
}