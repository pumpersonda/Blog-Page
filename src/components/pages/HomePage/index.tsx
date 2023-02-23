import { useNavigate } from 'react-router-dom';
import { Footer } from '../../organisms/Footer';
import { Hero } from '../../organisms/Hero';
import { Navbar } from '../../organisms/Navbar';
import { PageTemplate } from '../../templates/PageTemplate';
import './index.css';

export function HomePage() {
  const navigate = useNavigate();
  const goTo = () =>{
    navigate('Blog');
  }
  return (
    <div className="App-test">
      <PageTemplate
        hero={<Hero heading="ReactJS take-home test" buttonText='Check our blogs!' onClickButton={goTo}/>}
        header={<Navbar />}
        footer={<Footer />}
      >
        <div className="home">
          <div className="home__block">
            <section className='home__block--text'>
              Nullam maximus eros purus, vel dictum lorem pellentesque eget.
              Aenean et massa accumsan, varius velit tristique, tempus enim. Sed
              ligula leo, venenatis in interdum a, gravida vel metus. Sed
              sollicitudin magna quam, id rutrum tortor porttitor ac. Integer
              sapien libero, molestie sit amet suscipit quis, volutpat eu est.
              Donec porttitor sed mi vitae venenatis. Morbi viverra, magna eget
              porta egestas, risus odio volutpat risus, eu hendrerit sapien
              tellus quis tortor. Aenean sit amet vestibulum ligula. Vivamus
              congue eleifend hendrerit. Mauris malesuada, dui nec mollis
              maximus, quam augue ullamcorper felis, sed commodo lectus purus
              vel nisl. Fusce ultrices arcu ut ipsum laoreet, eu suscipit justo
              posuere. Sed id placerat neque, a fermentum ex. Praesent malesuada
              ac libero id posuere. Mauris a quam sed orci consectetur viverra.
              Suspendisse vulputate arcu sed dictum tincidunt. Nulla dictum est
              eget dolor condimentum aliquam.
            </section>
            <img
              src="https://i.pinimg.com/originals/15/ad/94/15ad9428c75a955e7cbd656c49ace4a4.jpg"
              alt="mexico"
              width={300}
            />
          </div>
          <div className="home__block">
            <div className="home__block--section-1">
              <img
                src="https://monchitime.com/www/wp-content/uploads/2021/09/Merida-4.jpg"
                alt="yucatan"
                width={400}
              />
              <section className='home__block--section-2'>
                Aenean et massa accumsan, varius velit tristique venenatis in
                interdum a, gravida vel metus. Sed sollicitudin magna quam, id
                rutrum tortor porttitor ac. Integer sapien libero, molestie sit
                amet suscipit quis, volutpat eu est. Donec porttitor sed mi
                vitae venenatis. Morbi viverra, magna eget porta egestas, risus
                odio volutpat risus, eu hendrerit sapien tellus quis tortor.
                Aenean sit amet vestibulum ligula. Vivamus congue eleifend
                hendrerit. Mauris malesuada, dui nec mollis maximus, quam augue
                ullamcorper felis, sed commodo lectus purus vel nisl. Fusce
                ultrices arcu ut ipsum laoreet, eu suscipit justo posuere. Sed
                id placerat neque, a fermentum ex. Praesent malesuada ac libero
                id posuere. Mauris a quam sed orci consectetur viverra.
                Suspendisse vulputate arcu sed dictum tincidunt. Nulla dictum
                est eget dolor condimentum aliquam.{' '}
              </section>
            </div>
            <div className="home__block--img-group">
              <img
                src="https://www.debate.com.mx/__export/1507762269304/sites/debate/img/2017/10/11/flamencos_en_rxa_celestxn.jpg_369779682.jpg"
                alt="flamingo"
                width={200}
              />
              <img
                src="https://www.debate.com.mx/__export/1507762269304/sites/debate/img/2017/10/11/flamencos_en_rxa_celestxn.jpg_369779682.jpg"
                alt="flamingo"
                width={200}
              />
              <img
                src="https://www.debate.com.mx/__export/1507762269304/sites/debate/img/2017/10/11/flamencos_en_rxa_celestxn.jpg_369779682.jpg"
                alt="flamingo"
                width={200}
              />
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
