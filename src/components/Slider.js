
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true, // Shows dot indicators at the bottom of the slider
    infinite: true, // Enables continuous looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: true, // Enables automatic sliding
  };
  
  return (
    <Slider {...settings}>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </Slider>
  );
}
