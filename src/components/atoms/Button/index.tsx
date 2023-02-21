import classNames from 'classnames';
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
        (<button className={btnClass} disabled={isDisabled} {...props} style={{...style}}>{text}</button>) :
        <a className={btnClass} href={ !!href ? href : '#'}  {...props} style={{...style}}>{text}</a>}
    </>
}