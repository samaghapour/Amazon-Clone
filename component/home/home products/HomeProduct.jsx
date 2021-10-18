const HomeProduct = ({ title, sources, names = [] }) => {
  return (
    <div className='home-product'>
      <span className='home-product-title'>{title}</span>

      <div className={`home-product-grid col-${names.length}`}>
        {sources.map((item, index) => {
          return (
            <a href='#' className='home-product-grid-items' key={index}>
              <img
                className='home-product-grid-items-img'
                src={item}
                alt={names && names[index]}
              />
              {names && (
                <span className='home-product-grid-items-title'>
                  {names[index]}
                </span>
              )}
            </a>
          );
        })}
      </div>

      <a href='#' className='details-a home-product-link'>
        Shop now
      </a>
    </div>
  );
};

export default HomeProduct;
