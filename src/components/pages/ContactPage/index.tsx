import { PageTemplate } from "../../templates/PageTemplate";
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { Heading } from '../../atoms/Heading';

export function ContactPage(){
        return(
            <PageTemplate
                header={<Navbar/>}
                footer={<Footer/>}
            >
                <Heading level={1}>Contact</Heading>
                <ul>
                    <li>Name: André Roberto Chay Sonda</li>
                    <li>Phone: (+52) 9993261737</li>
                    <li>Linkedin <a href="https://www.linkedin.com/in/andresonda/">
                        https://www.linkedin.com/in/andresonda/
                        </a>
                    </li>
                </ul>
            
        </PageTemplate>
        );
}