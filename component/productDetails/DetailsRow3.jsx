import { useSelector } from 'react-redux';

const DetailsRow3 = () => {
  const data = useSelector((state) => state.ProductDetails);

  const variants =
    data &&
    data.variant_groups.map((item) => {
      return { id: item.id, th: item.name, options: item.options };
    });

  return (
    <div id='DetailsRow3'>
      <span className='details-orange-title'>Product information</span>

      <div id='DetailsRow3Container'>
        <div id='DetailsRow3Col1'>
          <table id='ProductInformationTable'>
            <tbody>
              <tr key='1'>
                <th className='product-information-th'>Customer Reviews</th>
                <td className='product-information-td'>
                  <div className='card-rate-box' title='dummy rate'>
                    <div className='rate-stars'></div>
                    <span className='rate-numbers details-a'> 155,227</span>
                  </div>
                </td>
              </tr>

              {variants &&
                variants.map((tr) => {
                  return (
                    <tr key={tr.id}>
                      <th className='product-information-th'>{tr?.th}</th>
                      <td className='product-information-td'>
                        {tr?.options.map(
                          (option, index) =>
                            option.name +
                            `${index === tr?.options.length - 1 ? ' ' : ' , '}`
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div id='DetailsRow3Col2' title='dummy'>
          <div id='WarrantyBox'>
            <span className='DetailsRow3Title'>Warranty & Support</span>
            <div>
              <b>Product Warranty: </b> For warranty information about this
              product, please <span className='details-a'>click here</span>
            </div>
          </div>

          <div id='FeedbackBox'>
            <span className='DetailsRow3Title'>Feedback</span>
            <div>
              Would you like to
              <span className='details-a'> tell us about a lower price?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRow3;
