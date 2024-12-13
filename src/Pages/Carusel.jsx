import Carousel from 'react-bootstrap/Carousel';
import Carusel1 from '../Assets/Carusel1.webp'
import Carusel2 from '../Assets/Carusel2.webp'
import Carusel3 from '../Assets/Carusel3.jpg'
import '../Styles/Carusel.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='container' interval={3000}> {/* interval in milliseconds */}
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={Carusel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={Carusel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={Carusel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
