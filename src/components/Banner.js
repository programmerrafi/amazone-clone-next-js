import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="b1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="b2" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="b3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
