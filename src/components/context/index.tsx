// App imports
import { ApiProvider } from './api';
import { FiltersProvider } from './filters';
import { GoogleMapsProvider } from './maps';
import { TooltipProvider } from './tooltip';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <GoogleMapsProvider>
    <TooltipProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </TooltipProvider>
    </GoogleMapsProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";