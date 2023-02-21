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
}

export function Button({ type = ButtonTypes.Default, text = '', isDisabled = false, ...props }: ButtonProps) {
    const btnClass = classNames({
        button: true,
        'button__default': type === ButtonTypes.Default,
        'button__link': type === ButtonTypes.Link,
      });
    return <button className={btnClass} disabled={isDisabled} {...props}>{text}</button>
}