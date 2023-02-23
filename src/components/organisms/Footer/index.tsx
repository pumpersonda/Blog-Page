import { Button, ButtonTypes } from '../../atoms/Button';
import './index.css';
export function Footer() {
  return (
    <div className="footer">
      <div className="footer__section1">
        <p><Button type={ButtonTypes.Link} href={'/'} size={30}>Features</Button></p>
        <p><Button type={ButtonTypes.Link} href={'/'} size={30}>Uses cases</Button></p>
        <p><Button type={ButtonTypes.Link} href={'/'} size={30}>Team</Button></p>
        <p><Button type={ButtonTypes.Link} href={'/About'} size={30}>About Us</Button></p>
      </div>
      <div className="footer__section2">
       Quisque et dui mauris. Cras molestie at tortor niam ut mauris
      </div>
      <div className="footer__section2">
       Et iaculis leo enim quis ex. Curabitur sed justo mattis, rtor imperdiet viverra.
      </div>
    </div>
  );
}
