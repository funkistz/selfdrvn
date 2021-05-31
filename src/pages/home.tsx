import React from "react";
import withAuth from "../helpers/withAuth";
import NavigationBar from '../components/NavigationBar';
import {
    AppBar,
    Tabs,
    Tab,
    Chip,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Banner1 from "../components/Banner1";
import TopAlert from "../components/TopAlert";

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
        },
        '& .MuiChip-root': {
            borderRadius: 4,
            marginLeft: 5,
            fontSize: 12,
        }
    },
    banner: {
        marginTop: 15,
        padding: 32,
        borderRadius: 14,
        backgroundColor: '#FFEFE4',
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: '#FF9649'
    },
    bannerText: {
        fontSize: 12,
        fontWeight: 600,
    },
    wrapper: {
        top: 0,
        padding: 100,
        paddingTop: 90,
    },
}));

const Home = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <NavigationBar>
            <TopAlert />
            <div className={classes.wrapper}>
                <AppBar position="static" className={classes.tabs} elevation={0}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary"
                        textColor="primary">
                        <Tab label={<div>All <Chip size="small" label="2" color="primary" /></div>} />
                        <Tab label={<div>In Review <Chip size="small" label="2" color="primary" /></div>} />
                        <Tab label={<div>Complete <Chip size="small" label="2" color="primary" /></div>} />
                        <Tab label={<div>Moderator <Chip size="small" label="2" color="primary" /></div>} />
                        <Tab label={<div>Admin <Chip size="small" label="2" color="primary" /></div>} />
                    </Tabs>
                </AppBar>

                <Banner1 />
            </div>
        </NavigationBar>
    )
};

export default withAuth(Home);