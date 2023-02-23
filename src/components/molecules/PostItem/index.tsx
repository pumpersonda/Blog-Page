import { Button, ButtonTypes } from '../../atoms/Button';
import { PostInformation } from '../PostInformationForm';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../atoms/Heading';
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
      <Button
        type={ButtonTypes.Link}
        href={`/Blog/post/${id}`}
        {...{ class: 'card-item__link' }}
      >
        <img src={imageURL} alt="" />
      </Button>
      <div className="card-item__text">
        <div className="card-text__date">{publishedOn}</div>
        <div className="card-text__heading">
          <Button size={30} type={ButtonTypes.Link} href={`/Blog/post/${id}`}>
            {title}
          </Button>
        </div>
        <div className="card-text__description">
          <p>{description}</p>
        </div>
        <div className="card-text__author">
          <Heading level={3}> By {author} </Heading>
        </div>
      </div>
      <div className="card-item__options">
        <Button {...{ onClick: handleClick }}>Edit</Button>
      </div>
    </div>
  );
}
