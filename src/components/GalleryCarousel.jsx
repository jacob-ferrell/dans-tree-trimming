import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

const importAll = (r) => {
  return Object.values(r).map((module) => module.default);
};

const images = importAll(
  import.meta.globEager("../assets/images/*.{png,jpg,jpeg}")
);

const GalleryCarousel = (props) => {
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt="gallery-img"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
