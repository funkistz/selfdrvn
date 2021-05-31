import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import {
    IconButton,
    Drawer,
    Hidden,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerContent from './DrawerContent';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        btnToggle: {
            position: 'fixed',
            top: 30,
            backgroundColor: '#252631',
            color: '#ffffff',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            width: 'fit-content',
            "& button": {
                color: '#ffffff',
                padding: 6,
                paddingLeft: 2
            }
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: '#252631'
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#252631'
        },
        content: {
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
        },
        contentShift: {
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
        contentMobile: {
            marginLeft: 0,
        },
        wrapper: {
            top: 0,
            padding: 0,
        },
        wrapperMobile: {
            padding: 24
        },
    }),
);

const NavigationBar = (props: any) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const handleDrawerMobile = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeRoute = (routeName: any) => {
        return props.location.pathname === routeName ? true : false;
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden smDown >
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <DrawerContent />
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    {props.children}
                    <div className={classes.btnToggle}>
                        <IconButton aria-label="delete" onClick={handleDrawer}>
                            <MenuRoundedIcon />
                        </IconButton>
                    </div>
                </main>
            </Hidden>
            <Hidden mdUp >
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerMobile}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <DrawerContent />
                </Drawer>
                <main className={classes.contentMobile} >
                    <div className={classes.wrapperMobile}>
                        {props.children}
                    </div>
                    <div className={classes.btnToggle}>
                        <IconButton aria-label="delete" onClick={handleDrawerMobile}>
                            <MenuRoundedIcon />
                        </IconButton>
                    </div>
                </main>
            </Hidden>
        </div>
    );
};

export default withRouter(NavigationBar);