'use client'

import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
