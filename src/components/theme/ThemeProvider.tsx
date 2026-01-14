import { type PropsWithChildren, useEffect, useState } from 'react';

import { type Theme, ThemeProviderContext } from '@/components/theme/constants.ts';

type ThemeProviderProps = {
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: Readonly<PropsWithChildren<ThemeProviderProps>>)=> {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) ?? defaultTheme) as Theme
  )

  useEffect(() => {
    const root = globalThis.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = globalThis.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)

      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    theme,
  }

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  )
}

export { ThemeProvider }
