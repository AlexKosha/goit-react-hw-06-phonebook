import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { addFilter, getFilter } from '../../redux/contactSlice';

const Filter = ({ value, onChange }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(addFilter(e.currentTarget.value))}
      />
    </FilterLabel>
  );
};

export default Filter;
