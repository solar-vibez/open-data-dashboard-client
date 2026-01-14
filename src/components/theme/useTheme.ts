import { use } from 'react';

import { ThemeProviderContext } from '@/components/theme/constants.ts';

export const useTheme = () => {
  const context = use(ThemeProviderContext)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!context) {
    throw new TypeError("useTheme must be used within a ThemeProvider")
  }

  return context
}
