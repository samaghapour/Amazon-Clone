import { useLayoutEffect } from 'react';
import { ChangeSelectedProductOptions } from '../../../helpers';

const TextSec = ({ data }) => {
  const brand = data?.variant_groups.filter(
      (item) => item.name.toLowerCase() === 'brand'
    ),
    sizes = data?.variant_groups.filter(
      (item) => item.name.toLowerCase() === 'sizes'
    ),
    styles = data?.variant_groups.filter(
      (item) => item.name.toLowerCase() === 'styles'
    ),
    compatibleDevices = data?.variant_groups.filter(
      (item) => item.name.toLowerCase() === 'compatible devices'
    );

  useLayoutEffect(() => {
    const sizesFirstOption = document.querySelector(
        `li[data-id="${sizes && sizes[0]?.options[0].id}"]`
      ),
      stylesFirstOption = document.querySelector(
        `li[data-id="${styles && styles[0]?.options[0].id}"]`
      ),
      compatibleDevicesFirstOption = document.querySelector(
        `li[data-id="${
          compatibleDevices && compatibleDevices[0]?.options[0].id
        }"]`
      );

    if (sizesFirstOption || stylesFirstOption || compatibleDevicesFirstOption) {
      sizesFirstOption &&
        (sizesFirstOption.style.outline =
          ' 2px solid var(--primary-color-light)');

      stylesFirstOption &&
        (stylesFirstOption.style.outline =
          ' 2px solid var(--primary-color-light)');

      compatibleDevicesFirstOption &&
        (compatibleDevicesFirstOption.style.outline =
          ' 2px solid var(--primary-color-light)');
    }
  });

  return (
    <div id='TextSec'>
      {/* first row */}
      <div id='TextSecRow1'>
        <span id='ProductDetailsTitle'>{data?.name}</span>

        {brand?.length > 0 && (
          <a href='#' id='ProductBrandStore' className='details-a'>
            Visit the {brand[0]?.options[0]?.name} Store
          </a>
        )}

        <div className='card-rate-box' title='dummy rate'>
          <div className='rate-stars' />
          <span className='rate-numbers details-a'> 155,227</span>
        </div>
      </div>
      {/* second row */}
      <div id='TextSecRow2'>
        <div id='ProductDetailsPrice' className='RowsTitle'>
          price:{' '}
          <span className='details-orange-title '>
            {data?.price?.formatted_with_symbol}
          </span>
        </div>

        {sizes?.length > 0 && (
          <div id='SizesBox'>
            Sizes:{' '}
            <span className='selected-option' id='SizesBoxSelectedOption'>
              {sizes[0]?.options[0].name}
            </span>
            <ul className='product-options-box' id='SizesBoxUl'>
              {sizes[0]?.options.map((item) => {
                return (
                  <li
                    title={`Click to select ${item.name}`}
                    onClick={(e) => ChangeSelectedProductOptions(e.target)}
                    key={item.id}
                    data-id={item.id}
                    className='product-options-item'>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {styles?.length > 0 && (
          <div id='StylesBox'>
            Styles:{' '}
            <span id='StylesBoxSelectedOption' className='selected-option'>
              {styles[0]?.options[0].name}
            </span>
            <ul className='product-options-box' id='StylesBoxUl'>
              {styles[0]?.options.map((item) => {
                return (
                  <li
                    title={`Click to select ${item.name}`}
                    onClick={(e) => ChangeSelectedProductOptions(e.target)}
                    key={item.id}
                    data-id={item.id}
                    className='product-options-item'>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {compatibleDevices?.length > 0 && (
          <div id='CompatibleDevicesBox'>
            Compatible Devices:{' '}
            <span
              id='CompatibleDevicesBoxSelectedOption'
              className='selected-option'>
              {compatibleDevices[0]?.options[0].name}
            </span>
            <ul className='product-options-box' id='compatibleDevicesUl'>
              {compatibleDevices[0]?.options.map((item) => {
                return (
                  <li
                    title={`Click to select ${item.name}`}
                    onClick={(e) => ChangeSelectedProductOptions(e.target)}
                    key={item.id}
                    data-id={item.id}
                    className='product-options-item'>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div
          id='ProductDetailsDescription'
          dangerouslySetInnerHTML={{ __html: data && data?.description }}
        />
      </div>
    </div>
  );
};

export default TextSec;
