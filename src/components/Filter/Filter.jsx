import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { addFilter } from '../../redux/contactSlice';

const Filter = ({ value, onChange }) => {
  const { filter } = useSelector(state => state.userContacts);
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
