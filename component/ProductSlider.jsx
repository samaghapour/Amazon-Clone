import { useLayoutEffect } from 'react';
import Slider from 'react-slick';
import ProductCard from '../component/pruducts/productsCol2/ProductCard';

const settings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: false,
};

const ProductSlider = ({ products, category, CardType }) => {
  useLayoutEffect(() => {
    const prevBtn = document.querySelector('.slick-prev'),
      nextBtn = document.querySelector('.slick-next');

    if ((prevBtn, nextBtn)) {
      prevBtn.innerHTML = "<i id='PrevBtnIcon'   class='swiperIcon'></i>";
      nextBtn.innerHTML = "<i id='NextBtnIcon' class='swiperIcon'></i>";
    }
  });

  return (
    <Slider {...settings}>
      {products &&
        products.map((item) => (
          <ProductCard
            key={item.id}
            details={item}
            category={
              category === 'ProductsHasCategory'
                ? item.categories[item.categories.length - 1].slug
                : category
            }
            CardType={CardType}
          />
        ))}
    </Slider>
  );
};

export default ProductSlider;
