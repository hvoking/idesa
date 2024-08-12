// App imports
import { ApiProvider } from './api';
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { TooltipProvider } from './tooltip';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <TooltipProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </TooltipProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";