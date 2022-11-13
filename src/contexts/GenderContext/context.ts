import React from 'react'

import { Genders } from '@/enums'

export interface GendersContextValue {
  gender: Genders
  setGender: (value: Genders) => void
}

const gendersContext = React.createContext<GendersContextValue | undefined>(undefined)

export default gendersContext
