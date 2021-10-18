import { useLayoutEffect } from 'react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
};

const HomeSlider = () => {
  useLayoutEffect(() => {
    const prevBtn = document.querySelector('.slick-prev'),
      nextBtn = document.querySelector('.slick-next');

    if ((prevBtn, nextBtn)) {
      prevBtn.innerHTML =
        "<i id='HomeSliderPrev'   class='homeSliderIcon'></i>";
      nextBtn.innerHTML = "<i id='HomeSliderNext' class='homeSliderIcon'></i>";
    }
  });

  return (
    <div id='HomeSlider'>
      <Slider {...settings}>
        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/1.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>

        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/2.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>

        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/3.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>

        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/4.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>

        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/5.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>

        <a href='#' className='home-slider-link'>
          <img
            src='assets/images/home/slider images/6.jpg'
            alt='slider pic'
            className='home-slider-img'
          />
        </a>
      </Slider>
    </div>
  );
};

export default HomeSlider;
