import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterProductsByPrice } from '../../../redux/actions';

const PriceFilters = () => {
  const MinInputRef = useRef();
  const MaxInputRef = useRef();
  const dispatch = useDispatch();

  const Allproducts = useSelector((state) => state.Products);

  // filtering products that have brand variant
  const productsWithBrand =
    Array.isArray(Allproducts) &&
    Allproducts.filter((item) => {
      return item.variant_groups.find(
        (item) => item.name.toLowerCase() === 'brand'
      );
    });

  // dispatch price filtering action
  const FilterPriceFunc = (e, productsWithBrand, Allproducts) => {
    e.preventDefault();

    const minValue = e.target.getAttribute('data-min-value')
      ? e.target.getAttribute('data-min-value')
      : MinInputRef.current.value;
    const maxValue = e.target.getAttribute('data-max-value')
      ? e.target.getAttribute('data-max-value')
      : MaxInputRef.current.value;

    MinInputRef.current.value = minValue ? minValue : 1;
    MaxInputRef.current.value = maxValue ? maxValue : 999999;

    const checkedBrands = Array.from(
      document.querySelectorAll('.brand-items-checkbox:checked')
    ).map((item) => item.parentNode.innerText);

    dispatch(
      FilterProductsByPrice(checkedBrands, productsWithBrand, Allproducts, {
        min: MinInputRef.current.value,
        max: MaxInputRef.current.value,
      })
    );
  };

  return (
    <div id='PriceFilter'>
      <span className='FiltersTitle'>Price</span>
      <form
        onSubmit={(e) =>
          FilterPriceFunc(
            e,
            productsWithBrand && productsWithBrand,
            Allproducts
          )
        }>
        <li
          data-min-value={1}
          data-max-value={9999999}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          All price
        </li>
        <li
          data-min-value={1}
          data-max-value={25}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          Under $25
        </li>
        <li
          data-min-value={25}
          data-max-value={50}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          $25 to $50
        </li>
        <li
          data-min-value={50}
          data-max-value={100}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          $50 to $100
        </li>
        <li
          data-min-value={100}
          data-max-value={200}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          $100 to $200
        </li>
        <li
          data-min-value={200}
          data-max-value={999999999}
          onClick={(e) =>
            FilterPriceFunc(
              e,
              productsWithBrand && productsWithBrand,
              Allproducts
            )
          }>
          $200 & Above
        </li>
        <div id='PriceFiltersInputsDiv'>
          <input
            type='number'
            placeholder='$ Min'
            name='min'
            id='MinPriceFIlter'
            className='priceFiltersInputs'
            ref={MinInputRef}
          />
          <input
            type='number'
            placeholder='$ Max'
            name='max'
            id='MaxPriceFIlter'
            className='priceFiltersInputs'
            ref={MaxInputRef}
          />
          <input type='submit' value='Go' id='PriceFiltersSubmitBtn' />
        </div>
      </form>
    </div>
  );
};

export default PriceFilters;
