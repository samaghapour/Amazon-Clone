import { useEffect, useRef } from 'react';
import { commerce } from '../../../lib/Commerce';
import { resizeSelect } from '../../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const SearchBox = ({ placeHolder }) => {
  const SelectRef = useRef();
  const SearchInputRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const Categories = useSelector((state) => state.Categories);

  useEffect(() => {
    commerce.categories
      .list()
      .then((category) =>
        dispatch({ type: 'GET_CATEGORIES', payload: category.data })
      );

    // resize on initial load
    resizeSelect(SelectRef.current);

    SelectRef.current.addEventListener('change', (e) => {
      resizeSelect(e.target);
    });
  }, []);

  const SearchProductFunc = (e) => {
    e.preventDefault();

    router.push('/searchResult');
  };

  return (
    <form className='SearchBox' onSubmit={SearchProductFunc}>
      <select
        ref={SelectRef}
        name='searchSelect'
        className='SearchSelect'
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

      <input
        placeholder={placeHolder}
        type='text'
        className='SearchInput'
        autoComplete='off'
        ref={SearchInputRef}
      />
      <button className='SearchSubmit'>
        <span />
      </button>
    </form>
  );
};

export default SearchBox;
