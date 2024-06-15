// import { createTheme } from '@mui/material/styles';
import { blue, grey, lightBlue, pink, yellow } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: "#00796b",
                    white: "#ffffff",
                    bg:"#fff"
                },
                secondary: {
                    main:  "#9d556b",
                    midNightBlue: "#4f4f4f",
                    bx:"#AC7D88"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#011133",
                    white:"hsl(216, 50%, 16%)",
                    bg:"#0d192b"
                },
                secondary: {
                    main: "#f7a240",
                    midNightBlue: "#000",
                    bx:"#d74a6d"
                },
                background: {
                    default: "#121212",
                },
                text: {
                    primary: '#fff',
                    secondary: "#eb6d6d",
                },
            }),
    },
});
