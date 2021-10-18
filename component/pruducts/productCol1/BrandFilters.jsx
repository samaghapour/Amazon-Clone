import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FilterProductsByBrand } from '../../../redux/actions';

const BrandFilters = () => {
  const Allproducts = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  // filtering products that have brand variant
  const productsWithBrand =
    Array.isArray(Allproducts) &&
    Allproducts.filter((item) => {
      return item.variant_groups.find(
        (item) => item.name.toLowerCase() === 'brand'
      );
    });

  // dispatch brand filtering action
  const FilterBrandFunc = (productsWithBrand) => {
    const minInput = document.getElementById('MinPriceFIlter');
    const maxInput = document.getElementById('MaxPriceFIlter');

    const checkedBrands = Array.from(
      document.querySelectorAll('.brand-items-checkbox:checked')
    ).map((item) => item.parentNode.innerText);
    dispatch(
      FilterProductsByBrand(productsWithBrand, checkedBrands, {
        min: minInput.value,
        max: maxInput.value,
      })
    );
  };

  let brands = [];
  //   getting different brands from products
  productsWithBrand &&
    productsWithBrand.map((item) => {
      const variant = item.variant_groups.filter((item) => {
        return item.name.toLowerCase() === 'brand';
      });
      brands.push(variant[0].options[0].name);
    });

  brands = Array.from(new Set(brands));

  return (
    <div id='BrandFilters'>
      {brands.length > 0 && (
        <>
          <span className='FiltersTitle'>Featured Brands</span>

          <ul id='BrandList'>
            {brands &&
              brands.map((item, index) => {
                return (
                  <li className='brand-items filter-items' key={index}>
                    <label className='brand-items-label filter-items-label'>
                      <input
                        type='checkBox'
                        className='brand-items-checkbox filter-items-checkbox'
                        onChange={() =>
                          FilterBrandFunc(
                            productsWithBrand && productsWithBrand,
                            Allproducts
                          )
                        }
                      />
                      {item}
                    </label>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default BrandFilters;
