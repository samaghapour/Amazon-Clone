import { ChangeSelectedImageSrc } from '../../../helpers';
const ImagesSec = ({ data }) => {
  return (
    <div id='ImagesSec'>
      <div id='ImagesBox'>
        {data &&
          data.map((item) => {
            return (
              <img
                key={item.id}
                src={item.url}
                alt='product-image'
                className='product-images'
                onMouseEnter={(e) => ChangeSelectedImageSrc(e.target)}
                width={item.image_dimensions.width}
                height={item.image_dimensions.height}
              />
            );
          })}
      </div>

      <div id='LargeImageBox'>
        <img
          src={data && data[0]?.url}
          alt='image'
          id='SelectedImage'
          style={{
            width: data && data[0]?.image_dimensions.width,
            height: data && data[0]?.image_dimensions.height,
          }}
        />
        <span id='LargeImageDescription'>Roll over image to zoom in</span>
      </div>
    </div>
  );
};

export default ImagesSec;
