// pages/_app.tsx
import { TooltipProvider } from '@radix-ui/react-tooltip';
import '../src/styles/globals.css';  

function MyApp({ Component, pageProps }) {
  return (
    <TooltipProvider>
      <Component {...pageProps} />
    </TooltipProvider>
  );
}

export default MyApp;
