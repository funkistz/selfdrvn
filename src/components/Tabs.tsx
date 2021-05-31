import React from "react";
import withAuth from "../helpers/withAuth";
import NavigationBar from '../components/NavigationBar';
import {
    AppBar,
    Tabs,
    Tab,
    Chip,
} from '@material-ui/core';
import { Home as HomeIcon } from '@styled-icons/ionicons-outline';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles, Theme } from '@material-ui/core/styles';

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        backgroundColor: '#F9F9F9',
        color: '#000000',
        '& .MuiTab-wrapper': {
            alignItems: 'normal',
            flexDirection: 'initial',
            justifyContent: 'left',
            textTransform: 'none',
            color: '#B5BBC1'
        },
        '& .Mui-selected .MuiTab-wrapper': {
            color: '#000000'
        },
        '& .MuiTab-root': {
            minWidth: 50
        },
        '& .MuiTabs-indicator': {
            height: 3
        }
    }
}));

const Tabsx = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <NavigationBar>
            <AppBar position="static" className={classes.tabs} elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary"
                    textColor="primary">
                    <Tab label="All" /><Chip variant="outlined" size="small" label="Basic" />
                    <Tab label="In Review" />
                    <Tab label="Complete" />
                    <Tab label="Moderator" />
                    <Tab label="Admin" />
                </Tabs>
            </AppBar>



        </NavigationBar>
    )
};

export default Tabsx;