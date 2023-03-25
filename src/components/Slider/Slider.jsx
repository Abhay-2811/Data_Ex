import Carousel from "react-bootstrap/Carousel";
import aditya from "../../images/aditya.jpg";
import "./slider.css";
import Card from "../Cards/CardAb";
function NoTransitionExample() {
  return (
    <div>
      <Carousel slide={false} variant="dark">
        <Carousel.Item>
          <Card name="Aditya Chaurasia" decs="He is a good boy" img={aditya} />
        </Carousel.Item>

        <Carousel.Item>
          <Card name="Aditya Chaplot" decs="He is a smart boy" img={aditya} />
        </Carousel.Item>
        <Carousel.Item>
          <Card name="ABhay Upad" decs="He is a handsome boy" img={aditya} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NoTransitionExample;
