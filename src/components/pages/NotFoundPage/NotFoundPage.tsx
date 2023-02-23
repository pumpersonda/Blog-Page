import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';
import './index.css';

export function NotFoundPage() {
  return (
    <PageTemplate header={<Navbar />} footer={<Footer />}>
      <div id="error-page">
      <p className='error-page__title'>Oops!</p>
      <img src="https://cdn-icons-png.flaticon.com/512/284/284270.png" alt="" width={300} height={300} />
      <p className='error-page__description'>Sorry, an unexpected error has occurred.</p>
    </div>
    </PageTemplate>
  );
}
