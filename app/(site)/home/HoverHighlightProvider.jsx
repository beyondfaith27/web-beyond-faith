"use client"

import React, { createContext, useContext, useState } from 'react'

const HoverContext = createContext(null)

export const HoverHighlightProvider = ({ children }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <HoverContext.Provider value={[hoveredItem, setHoveredItem]}>
      {children}
    </HoverContext.Provider>
  )
}

export const useHoverHighlightContext = () => { 
  return useContext(HoverContext)
}