
export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[900],
            text: {
              primary: grey[800],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  