import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1E334F',
        },
        secondary: {
            main: '#2DB696',
        },
        error: {
            main: '#eb445a',
        },
        background: {
            default: '#F0F2F5',
        },
    },
});

export default theme;