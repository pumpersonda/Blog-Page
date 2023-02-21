import { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import './index.css';


export interface InputProps{
    id?:string;
    type?: HTMLInputTypeAttribute;
    isInvalid?: boolean;
    placeholder?:string;
}
export function Input({id="", type = 'text', isInvalid = false, placeholder = ''}: InputProps){
    const inputClass = classNames({
        input: true,
        'input__text': type === 'text'
    });
    return <input id={id} className={inputClass} type={type} disabled={isInvalid} placeholder={placeholder} />
}