import { Button, ButtonTypes } from '../../atoms/Button';
import './index.css';

export interface MenuElement {
    id: string;
    href:string;
    text:string;
}

export interface MainMenuProps {
    menus: MenuElement []
}

export function MainMenu({menus}:MainMenuProps){
    return <menu className='main-menu'>
        {menus.map((menu, index) => {
            return <li className='main-menu__menu'>
                <Button key={index} text={menu.text} type={ButtonTypes.Link} size={30} />
            </li>
        })}
    </menu>
}