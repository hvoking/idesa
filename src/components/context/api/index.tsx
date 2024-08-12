// App imports
import { GoogleApiProvider } from './google';
import { PropertyApiProvider } from './property';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
    <PropertyApiProvider>
      {children}
    </PropertyApiProvider>
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";