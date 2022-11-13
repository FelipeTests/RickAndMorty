import React from 'react'
import { Genders } from '@/enums'

import GendersContext from './context'

interface GendersContextProviderProps {
  children: React.ReactNode
}

export default function GendersContextProvider(props: GendersContextProviderProps) {
  const { children } = props

  const [gender, setGenderBase] = React.useState(Genders.All)

  React.useEffect(() => {
    const storedGender = window.localStorage.getItem('gender')
    if (storedGender) {
      setGenderBase(storedGender as Genders)
    }
  }, [])

  const setGender = React.useCallback((newGender: Genders) => {
    setGenderBase(newGender)
    window.localStorage.setItem('gender', newGender)
  }, [])

  
  return (
    <GendersContext.Provider value={{
      gender,
      setGender
    }}>
      {children}
    </GendersContext.Provider>
  )
}
