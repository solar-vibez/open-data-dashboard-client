import './App.css';
import { ModeToggle } from '@/components/common/ModeToggle.tsx';
import { ThemeProvider } from '@/components/theme/ThemeProvider.tsx';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
    </ThemeProvider>
  );
};

export { App };
