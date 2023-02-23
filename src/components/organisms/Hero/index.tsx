import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import './index.css';

export interface HeroProps {
  heading?:string;
  subHeading? :string;
  buttonText?: string;
  onClickButton?: () => {}
}

export function Hero({heading, subHeading, buttonText, onClickButton}: HeroProps) {

  return (
    <section className="hero">
      <div>
        <Heading level={1} color="#ffffff">
          {heading}
        </Heading>
        <Heading level={4} color="#ffffff">
          {subHeading}
        </Heading>
        {!!buttonText && (
          <Button text={buttonText} {...{ onClick: onClickButton }} />
        )}
      </div>
    </section>
  );
}
