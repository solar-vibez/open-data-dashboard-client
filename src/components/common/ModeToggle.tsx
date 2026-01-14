import { MoonStar, Sun } from 'lucide-react';
import { useCallback } from 'react';

import { useTheme } from '@/components/theme/useTheme.ts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils.ts';

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const isDark = theme === 'dark';

  const toggleMode = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return (
    <Button
      aria-label="Toggle dark mode"
      className={cn(
        isDark
          ? 'border-sky-600 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:hover:bg-sky-400/10 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40'
          : 'border-amber-600 text-amber-600! hover:bg-amber-600/10 focus-visible:border-amber-600 focus-visible:ring-amber-600/20 dark:border-amber-400 dark:text-amber-400! dark:hover:bg-amber-400/10 dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40',
      )}
      onClick={toggleMode}
      size="icon"
      variant="outline"
    >
      {isDark ? <MoonStar /> : <Sun />}
    </Button>
  );
};

export { ModeToggle };
