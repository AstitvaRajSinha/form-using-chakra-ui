// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Set the initial color mode to 'light'
    useSystemColorMode: false,
  },
  // Your custom theme settings go here
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
    // Add more font settings as needed
  },
  colors: {
    // Define your custom colors here
    primary: '#FF5733',
    secondary: '#3380FF',
    // Add more color definitions as needed
  },
  // ... other theme configurations
});

export default theme;
