import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import './index.css';

export function Hero(){
    const onClick = ()=>{
        alert("yay :v");
    }
    return <section className="hero">
        <div>
            <Heading level={1} color='#ffffff'>Heading :v</Heading>
            <Heading level={4} color='#ffffff'>SubHeading :p</Heading>
            <Button text='CALL TO ACTION' {...{onClick: onClick}} />
        </div>
    </section>
}