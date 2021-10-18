import HomeProduct from './HomeProduct';

const HomeProductsBox = () => {
  return (
    <div id='HomeProductsBox'>
      <HomeProduct
        title='Shop by Category'
        sources={[
          'assets/images/home/Shop by Category (1).jpg',
          'assets/images/home/Shop by Category (2).jpg',
          'assets/images/home/Shop by Category (3).jpg',
          'assets/images/home/Shop by Category (4).jpg',
        ]}
        names={[
          'Baby',
          'Computers & Accessories',
          'Video Games',
          'Toys & Games',
        ]}
      />

      <HomeProduct
        title='Gaming accessories'
        sources={[
          'assets/images/home/Gaming accessories (1).jpg',
          'assets/images/home/Gaming accessories (2).jpg',
          'assets/images/home/Gaming accessories (3).jpg',
          'assets/images/home/Gaming accessories (4).jpg',
        ]}
        names={['Chairs', 'Headsets', 'Keyboards', 'Computer mice']}
      />

      <HomeProduct title='Oculus' sources={['assets/images/home/Oculus.jpg']} />

      <HomeProduct
        title='Comfy styles for her'
        sources={[
          'assets/images/home/Comfy styles for her (1).jpg',
          'assets/images/home/Comfy styles for her (2).jpg',
          'assets/images/home/Comfy styles for her (3).jpg',
          'assets/images/home/Comfy styles for her (4).jpg',
        ]}
        names={['hoodies', 't-shirts', 'other clothes', 'pants']}
      />
      <HomeProduct
        title='Gaming merchandise'
        sources={[
          'assets/images/home/Gaming merchandise (1).jpg',
          'assets/images/home/Gaming merchandise (2).jpg',
          'assets/images/home/Gaming merchandise (3).jpg',
          'assets/images/home/Gaming merchandise (4).jpg',
        ]}
        names={['cups', 'shirts', 'toys', 'hats']}
      />
      <HomeProduct
        title='Order Now'
        sources={['assets/images/home/shipping.jpg']}
      />
      <HomeProduct
        title='Easy returns'
        sources={['assets/images/home/Easy returns.jpg']}
      />
      <HomeProduct
        title='Explore home bedding'
        sources={['assets/images/home/Explore home bedding.jpg']}
      />
      <HomeProduct
        title='Find your ideal TV'
        sources={['assets/images/home/Find your ideal TV.jpg']}
      />
      <HomeProduct
        title='Shop Laptops & Tablets'
        sources={['assets/images/home/Shop Laptops & Tablets.jpg']}
      />
      <HomeProduct
        title='amazon basics'
        sources={['assets/images/home/amazon basics.jpg']}
      />
    </div>
  );
};

export default HomeProductsBox;
