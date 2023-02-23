import { Footer } from '../../organisms/Footer';
import { Hero } from '../../organisms/Hero';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';

export function HomePage() {
  return (
    <div className="App-test">
      <PageTemplate hero={<Hero />} header={<Navbar />} footer={<Footer />}>
        <p>Soy Andre</p>
      </PageTemplate>
    </div>
  );
}
