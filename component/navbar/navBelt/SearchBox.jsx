import { useEffect, useRef, useState } from 'react';
import { commerce } from '../../../lib/Commerce';
import { resizeSelect } from '../../../helpers';

const SearchBox = () => {
  const [Categories, setCategories] = useState(null);
  const selectElem = useRef();

  useEffect(() => {
    commerce.categories.list().then((category) => setCategories(category.data));

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
        {Categories?.map((option) => {
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
