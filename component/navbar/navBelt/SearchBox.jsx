import { useEffect, useRef } from 'react';
import { commerce } from '../../../lib/Commerce';
import { resizeSelect } from '../../../helpers';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const selectElem = useRef();
  const dispatch = useDispatch();
  const Categories = useSelector((state) => state.Categories);

  useEffect(() => {
    commerce.categories
      .list()
      .then((category) =>
        dispatch({ type: 'GET_CATEGORIES', payload: category.data })
      );

    // resize on initial load
    resizeSelect(selectElem.current);

    selectElem.current.addEventListener('change', (e) => {
      resizeSelect(e.target);
    });
  }, []);

  return (
    <form id='SearchBox'>
      <select
        ref={selectElem}
        name='searchSelect'
        id='SearchSelect'
        defaultValue='All'>
        <option value='All'>All</option>
        {Categories &&
          Categories.map((option) => {
            return (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            );
          })}
      </select>

      <input type='text' id='SearchInput' autoComplete='off' />
      <button id='SearchSubmit'>
        <span />
      </button>
    </form>
  );
};

export default SearchBox;
