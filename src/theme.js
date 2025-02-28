import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#e6f1ff',
    100: '#b3d1ff',
    200: '#80b1ff',
    300: '#4d91ff',
    400: '#1a71ff',
    500: '#0052cc', // Primary brand color
    600: '#0047b3',
    700: '#003d99',
    800: '#003380',
    900: '#002966',
  },
  accent: {
    500: '#38b2ac', // Teal accent color
  },
}

const theme = extendTheme({ config, colors })

export default theme