import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './index.css';
export enum ButtonTypes {
    Link,
    Default
}

export interface ButtonProps {
    type?: ButtonTypes;
    text?: string;
    isDisabled?: boolean;
    href?: string;
    size?: number;
    children?: React.ReactNode;
}

export function Button({ type = ButtonTypes.Default, text = '', isDisabled = false, href, size, ...props }: ButtonProps) {
    const btnClass = classNames({
        button: true,
        'button__default': type === ButtonTypes.Default,
        'button__link': type === ButtonTypes.Link,
      });

      const style = {
        'fontSize': size ? size : '16px'
      };
      
    return <>
        { type === ButtonTypes.Default ? 
        (<button className={btnClass} disabled={isDisabled} {...props} style={{...style}}>
            {text}
            {props.children}
        </button>) :
        <Link className={btnClass} to={!!href ? href : '#'} {...props} style={{...style}}>
            {text}
            {props.children}
        </Link>
        }
    </>
}