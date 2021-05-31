import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        companyBlue: {
            main: '#65CFE9',
            contrastText: '#fff',
        },
    }
});

export default theme;