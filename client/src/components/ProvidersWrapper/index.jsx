import { ThemeProvider } from '../../providers/ThemeProvider';
import { ViewProvider } from '../../providers/ViewProvider';
import { ClientProvider } from '../../providers/ClientProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { VIEWS } from '../Views';

const queryClient = new QueryClient();

export const ProvidersWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProvider>
        <ThemeProvider>
          <ViewProvider views={VIEWS} defaultView={VIEWS.HOME}>
            {children}
          </ViewProvider>
        </ThemeProvider>
      </ClientProvider>
    </QueryClientProvider> 
  );
};
