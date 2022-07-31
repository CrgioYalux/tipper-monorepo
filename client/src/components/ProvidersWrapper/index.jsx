import { ThemeProvider } from '../../providers/ThemeProvider';
import { ViewProvider } from '../../providers/ViewProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const ProvidersWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ViewProvider>
          {children}
        </ViewProvider>
      </ThemeProvider>
    </QueryClientProvider> 
  );
};
