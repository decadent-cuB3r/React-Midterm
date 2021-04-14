import Banner1 from "../images/carousel/banner1.jpg";
import Banner2 from "../images/carousel/banner2.png";
import Banner3 from "../images/carousel/banner3.png";
import { Carousel } from "antd";

export default function slide() {
  const contentStyle = {
    height: "160px",
    color: "#yellow",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="carousel">
      <div className="carousel-self-size">
        <Carousel autoplay className="carousel-self">
          <div>
            <img className="carousel-img" src={Banner1}></img>
          </div>
          <div>
            <img className="carousel-img" src={Banner2}></img>
          </div>
          <div>
            <img className="carousel-img" src={Banner3}></img>
          </div>
        </Carousel>
      </div>
      <div className="carousel-block-yellow"></div>
    </div>
  );
}
