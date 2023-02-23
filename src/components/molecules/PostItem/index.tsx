import { Button, ButtonTypes } from '../../atoms/Button';
import { PostInformation } from '../PostInformationForm';
import { useNavigate } from 'react-router-dom';
import './index.css';

export function PostItem({
  id,
  publishedOn,
  imageURL,
  title,
  description,
  author,
}: PostInformation) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`edit/${id}`);
    }
  };

  return (
    <div className="card-item">
      <Button type={ButtonTypes.Link} href={`/Blog/post/${id}`}>
        <img src={imageURL} alt="" height="200" width="200" />
      </Button>
      <div className="card-item__text">
        <div className="card-text__date">{publishedOn}</div>
        <div className="card-text__heading">{title}</div>
        <div className="card-text__description">{description}</div>
        <div className="card-text__author">{author}</div>
      </div>
      <div className="card-item__options">
        <Button {...{ onClick: handleClick }}>Edit</Button>
      </div>
    </div>
  );
}
