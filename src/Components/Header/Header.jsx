import Carousel from 'react-bootstrap/Carousel';
import Hero from './Hero.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import ex from './ex.jpg';

function Header() {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
          height={500}
            className="d-block w-100"
            src={Hero}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3 >WELCOME</h3>
            <p>Our Taste Is Our Identity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height={500}
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ex}
            height={500}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Header;