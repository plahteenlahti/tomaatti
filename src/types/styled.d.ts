import 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    bgPrimary: string
    accentColor: string

    fontRegular: string
    fontMedium: string
    fontBold: string
  }
}
