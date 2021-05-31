import {
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
} from '@material-ui/core';
import { ReactComponent as ExchangeIcon } from "../images/exchange.svg";
import { NavLink, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import ProfileBar from './ProfileBar';
import Routes from '../Routes';
import logo from "../images/AppIcon.png";

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) => ({
    drawerHeader: {
        padding: theme.spacing(0, 1),
        color: '#ffffff',
        "& h6": {
            color: '#ffffff',
            paddingLeft: 8,
            paddingRight: 16
        }
    },
    logo: {
        height: 32
    },
    menuList: {
        "& a": {
            color: "#ffffff"
        },
        "& .MuiListItemIcon-root": {
            color: "#ffffff",
            minWidth: 34
        },
        ".MuiListItem-root": {
            paddingLeft: 32
        }
    },
    listItem: {
        paddingLeft: 32
    },
    footer: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: drawerWidth
    },
}));

const DrawerContent = (props: any) => {

    const classes = useStyles();
    const activeRoute = (routeName: any) => {
        return props.location.pathname === routeName ? true : false;
    }

    return (
        <div>
            <div className={classes.drawerHeader}>
                <Toolbar>
                    <img src={logo} alt="SelfDrvn" className={classes.logo} />
                    <Typography variant="h6" noWrap>
                        SelfDrvn
                        </Typography>
                    <ExchangeIcon />
                </Toolbar>
            </div>
            <List className={classes.menuList}>
                {Routes.map((prop, key) => {
                    return (
                        <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                            <ListItem button key={prop.sidebarName} selected={activeRoute(prop.path)} className={classes.listItem}>
                                <ListItemIcon>
                                    {prop.icon}
                                </ListItemIcon>
                                <ListItemText primary={prop.sidebarName} />
                                {prop.icon2 &&
                                    <ListItemIcon>
                                        <Icon>{prop.icon2}</Icon>
                                    </ListItemIcon>
                                }
                            </ListItem>
                        </NavLink>
                    );
                })}
            </List>
            <div className={classes.footer}>
                <ProfileBar></ProfileBar>
            </div>
        </div>
    )
};

export default withRouter(DrawerContent);