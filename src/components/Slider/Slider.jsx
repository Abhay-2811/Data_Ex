import Carousel from "react-bootstrap/Carousel";
import aditya from "../../images/aditya.jpg";
import abhay from "../../images/abhay.jpg";
import eddy from "../../images/eddy.jpg";
import "./slider.css";
import Card from "../Cards/CardAb";
function NoTransitionExample() {
  return (
    <div>
      <Carousel slide={false} variant="dark" className="slider__carousel">
        <Carousel.Item>
          <Card
            name="Aditya Chaurasia"
            decs="Frontend Developer"
            img={aditya}
          />
        </Carousel.Item>

        <Carousel.Item>
          <Card name="Aditya Chaplot" decs="Smart Contract and backend developer" img={eddy} />
        </Carousel.Item>
        <Carousel.Item>
          <Card name="Abhay Upadhyay" decs="Project manager and fullstack blockchain developer" img={abhay} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NoTransitionExample;