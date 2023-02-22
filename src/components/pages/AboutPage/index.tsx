import { PageTemplate } from "../../templates/PageTemplate";
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { Heading } from '../../atoms/Heading';

export function AboutPage(){
    return (
        <PageTemplate
            header={<Navbar/>}
            footer={<Footer/>}
        >
            <Heading level={1}>About us</Heading>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et vestibulum turpis. Sed non tellus nunc. Integer tincidunt tempor tellus, nec ullamcorper tellus vestibulum sit amet. Duis urna risus, malesuada sit amet posuere quis, cursus nec quam. Donec ut quam in mi posuere tincidunt. Maecenas convallis urna quis finibus efficitur. Vivamus tempus, ligula sed dignissim bibendum, magna enim ornare erat, a laoreet erat justo id massa. Curabitur id fermentum massa. Aenean non enim feugiat, ornare metus vitae, tempus magna.

Etiam sodales velit sed nibh fermentum faucibus. Vestibulum sodales libero in massa sollicitudin auctor. Nulla sodales urna et elementum fringilla. Sed auctor, mauris efficitur fringilla tempor, enim dolor aliquam est, nec imperdiet nunc risus non eros. Duis ac nisi in erat viverra lobortis sed at tortor. Phasellus ex justo, feugiat sit amet purus sed, pulvinar aliquet lacus. Fusce tempor convallis scelerisque. Praesent congue venenatis tristique. Suspendisse eu risus ultricies, hendrerit risus at, faucibus tellus.

Proin nec tellus quis diam suscipit hendrerit in vitae risus. Nulla sit amet enim enim. Cras posuere eleifend ligula vel varius. Morbi fermentum consectetur quam, non pellentesque nibh iaculis a. Maecenas justo purus, tempor id ex ut, eleifend vulputate elit. Morbi sed mollis nunc. Aliquam mattis lorem ut dolor rhoncus, non hendrerit lectus convallis. Pellentesque cursus congue velit, vel ornare magna gravida a. Nulla odio neque, accumsan in congue vel, rutrum quis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum cursus eleifend. Vivamus faucibus velit volutpat consectetur convallis.

Cras vestibulum, nisl quis pretium vestibulum, felis mauris faucibus ligula, in lobortis elit tortor id ipsum. Nunc sollicitudin sed erat vitae volutpat. Pellentesque in egestas leo. Etiam congue elementum condimentum. Sed magna metus, ultrices nec erat vel, egestas tincidunt quam. Nulla accumsan neque non quam fringilla, venenatis consectetur orci volutpat. Ut gravida diam sed lacinia viverra. Curabitur quis mauris a diam bibendum ullamcorper. Nullam placerat consequat efficitur.

Fusce auctor nisl erat, varius rutrum mi convallis vel. Donec ligula augue, accumsan sed vestibulum et, rhoncus eget urna. Quisque vel sodales nisl. Quisque gravida vitae risus quis mattis. Vestibulum cursus eros justo, vitae pretium erat pulvinar quis. Vestibulum rutrum dui risus. Fusce eget nibh velit. Duis ut egestas enim.
            </section>

        </PageTemplate>
    );
}