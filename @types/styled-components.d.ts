/* eslint-disable @typescript-eslint/no-empty-object-type */
import { theme } from '@/styles/theme'

import 'styled-components'

type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
