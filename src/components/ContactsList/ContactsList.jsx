import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from './ContactsList.styled';
import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../redux/contactSlice';
import { useMemo } from 'react';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = useMemo(() => {
    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) ||
          contact.number.includes(filter)
      );
    };
    return getVisibleContacts();
  }, [contacts, filter]);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default Contacts;
