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
  sidebar: {
    bg: 'linear-gradient(180deg, #1a365d 0%, #2a4365 100%)',
    hover: '#2d3748',
    text: '#ffffff',
    iconColor: '#63b3ed'
  }
}

const styles = {
  global: {
    body: {
      bg: 'gray.50',
      color: 'gray.800'
    }
  }
}

const components = {
  Button: {
    variants: {
      'sidebar-nav': {
        color: 'sidebar.text',
        _hover: {
          bg: 'sidebar.hover',
          transform: 'translateX(2px)',
          transition: 'all 0.2s'
        },
        _active: {
          bg: 'sidebar.hover',
          color: 'white'
        }
      }
    }
  }
}

const theme = extendTheme({ config, colors, styles, components })

export default theme