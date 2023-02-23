import { useEffect, useState } from 'react';
import { Input } from '../../atoms/Input';
import { Button, ButtonTypes } from '../../atoms/Button';
import { Label } from '../../atoms/Label';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../pages/PostEditDetails';
import { searchPostByName } from '../../../api';

export function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [postList, setPostList] = useState<Post[]>([]);
  const [showListDropdown, setShowListDropdown] = useState(false);


  useEffect(() => {
    const data = searchPostByName(inputValue);
    setPostList([...data]);  
  }, [inputValue]);

  const onFocusHandler = () => {
    setShowListDropdown(true);
  }

  const onBlurHandler = () => {
    setTimeout(()=>{
      setShowListDropdown(false);
    }, 1000);
  }

  const onChangeHandler = (event: any) => {
    let value = event.target.value;
    setInputValue(value);
  }

  return (
    <div className="search-bar">
      <Label inputId="search-id" text="SEARCH THE SITE" />

      <div className="search-bar__input--container">
        <div className='search-bar__dropddown'>
          <Input id="search-id" placeholder="ENTER KEYWORD" 
            {...{onFocus:onFocusHandler, onBlur: onBlurHandler, value: inputValue, onChange: onChangeHandler}} />
          { showListDropdown && (
            <div className='search-bar__dropdown--list'>
              { postList.map((post:Post)=>{
                return <Button type={ButtonTypes.Link} href={`/Blog/post/${post.id}`}>{post.title}</Button>
              })} 
          </div>
          )}
        </div>  
        <Button text="SEARCH" />
      </div>
      
    </div>
  );
}
