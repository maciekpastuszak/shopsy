'use client'

import { ReactNode, createContext, useState } from 'react';

export const INITIAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => '',
  }

  const FilterContext = createContext(INITIAL_FILTER_DATA)

  export const FilterProvider = ({ children }: { children: React.ReactNode }) => {

    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort, setSort] = useState('-createdAt')
    return (
      <FilterContext.Provider value={{
        categoryFilters,
        setCategoryFilters,
        sort,
        setSort
      }}>
        {children}
      </FilterContext.Provider>
    )
  }