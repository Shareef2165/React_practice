

import React, { createContext, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ value, children }) => {
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
