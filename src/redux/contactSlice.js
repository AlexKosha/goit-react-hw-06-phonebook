import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'userContacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'userContacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContacts, deleteContact, addFilter } = contactSlice.actions;

export const getContacts = state => state.userContacts.contacts;
export const getFilter = state => state.userContacts.filter;
