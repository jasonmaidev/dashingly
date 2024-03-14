import { createContext, useContext } from 'react';

export const DataContext = createContext(undefined);

export function useDataContext() {
  const data = useContext(DataContext);

  if (data === undefined) {
    throw new Error('useDataContext must be used with a DataContext');
  }

  return data;
}