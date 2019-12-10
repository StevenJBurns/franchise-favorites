import React from 'react';

const initialUserState = {
  name: '',
  isAuthenticated: false,
  favorites: [],
};

const updateUserName = (oldState, newName) => ({
  ...oldState,
  name: newName,
});

export const UserContext = React.createContext(initialState);