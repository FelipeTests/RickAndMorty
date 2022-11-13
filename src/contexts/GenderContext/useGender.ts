import React from 'react'

import GendersContext, { GendersContextValue } from './context'

export default function useGender(): GendersContextValue {
  const context = React.useContext(GendersContext)

  if (!context) {
    throw new Error('useGender must be used within GendersContextProvider.')
  }

  return context
}
