// React imports
import { useState, useContext, createContext } from 'react';

const TooltipContext: React.Context<any> = createContext(null)

export const useTooltip = () => {
  return (
    useContext(TooltipContext)
  )
}

export const TooltipProvider = ({children}: any) => {
  const [ propertyInfo, setPropertyInfo ] = useState(null);
  const [ activePropertyInfo, setActivePropertyInfo ] = useState(false);

  return (
    <TooltipContext.Provider value={{ 
      propertyInfo, setPropertyInfo,
      activePropertyInfo, setActivePropertyInfo,
    }}>
      {children}
    </TooltipContext.Provider>
  )
}

TooltipContext.displayName = "TooltipContext";