import { Button } from '../../atoms/Button';
import './index.css';

export interface PostItemProps {
    id: string;
    publishedOn: string;
    imageUrl: string;
    title: string;
    description: string;
    author: string;
}

export function PostItem({ publishedOn, imageUrl, title, description, author }: PostItemProps){
    return <div>
        <Button text='IMAGEN'></Button>
        <div className='card-text'>
            <div className='card-text__date'>{publishedOn}</div>
            <div className='card-text__heading'>{title}</div>
            <div className='card-text__description'>{description}</div>
            <div className='card-text__author'>{author}</div>
        </div>
    </div>;
}