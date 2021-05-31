import React from "react";
import NavigationBar from '../components/NavigationBar';
import {
    Grid,
    Typography,
    Box,
    TextField,
    Button,
    Avatar,
    Hidden
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import backgroundImg from '../images/Placeholder-img.png';
import googleImg from '../images/google.png';
import linkedinImg from '../images/linkedin.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useMediaQuery } from '../hooks';
import { UseForm } from "../helpers/useForm";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            height: '100vh'
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        wrapper: {
            height: '100vh',
            maxHeight: '100vh',
            overflow: 'scroll',
            paddingBottom: 80
        },
        box: isRowBased => ({
            padding: '12'
        }),
        banner: {
            backgroundImage: `url(` + backgroundImg + `)`,
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        title1: {
            fontSize: 18,
            color: '#0062FF',
            marginBottom: 11
        },
        title2: {
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 16
        },
        title3: {
            fontSize: 16,
            fontWeight: 400,
        },
        input: {
            marginTop: 16,
            width: '100%'
        },
        forgot: {
            marginTop: 16,
            marginBottom: 16,
            color: '#0062FF',
            fontSize: 12,
            float: 'right',
            textTransform: 'none',
            fontWeight: 400,
            "& .MuiButton-iconSizeSmall > *:first-child": {
                fontSize: 14
            }
        },
        signIn: {
            fontSize: 15,
            backgroundColor: '#0062FF',
            color: '#ffffff',
            padding: 15,
            textTransform: 'none',
            boxShadow: 'none',
        },
        or: {
            textAlign: 'center',
            fontSize: 16,
            margin: 8
        },
        gridLeft: {
            paddingRight: 6
        },
        gridRight: {
            paddingLeft: 6
        },
        signInWith: {
            textTransform: 'none',
            backgroundColor: '#ffffff',
            boxShadow: 'none',
            border: '1px solid #F5F6F9'
        }
    }),
);

const Login = () => {

    //reset token everytime enter this page - testing only
    localStorage.removeItem("token");

    let history = useHistory();
    const classes = useStyles();
    const isRowBased = useMediaQuery('(min-width: 500px)');
    const styles: any = {
        container: (isRowBased: boolean) => ({
            padding: isRowBased ? '15%' : '24px',
        })
    };

    const initialState = {
        username: "",
        password: "",
    };

    const { onChange, onSubmit, values } = UseForm(
        loginUserCallback,
        initialState
    );

    async function loginUserCallback(event: any) {

        if (event.target.username.value == 'admin' && event.target.password.value == 'admin') {
            console.log('success');
            localStorage.setItem("token", event.target.username.value);

            history.push("/");

        } else {
            console.log('fail');
            alert('Wrong username or password. *username: admin, password: admin');
        }

    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item lg={6} md={8} sm={12} className={classes.wrapper}>
                    <Box style={styles.container(isRowBased)}>
                        <Typography variant="h6" className={classes.title1} >
                            Sign In
                        </Typography>
                        <Typography variant="h1" className={classes.title2} >
                            Next Generation<br />
                            Employee<br />
                            Engagement
                        </Typography>
                        <Typography variant="h6" className={classes.title3} >
                            Gigarena is a gig marketplace for DevOps work and a platform for companies to access a wide pool of talent that are constantly getting better though contineous upskilling through technical challenges & task.
                        </Typography>

                        <form onSubmit={onSubmit}>

                            <TextField id="username" name='username' onChange={onChange} label="Username" variant="outlined" className={classes.input} />
                            <TextField id="password" name='password' onChange={onChange} type='password' label="Password" variant="outlined" className={classes.input} />

                            <Button className={classes.forgot} size="small" endIcon={<ArrowForwardIosIcon />}>
                                Forget Password
                            </Button>

                            <Button className={classes.signIn} fullWidth={true} variant="contained" color="primary" type='submit'>
                                Sign In
                            </Button>

                        </form>

                        <Typography variant="h6" className={classes.or} >
                            Or
                        </Typography>

                        <Grid container item spacing={0} xs={12}>
                            <Grid item xs={6} className={classes.gridLeft}>
                                <Button
                                    className={classes.signInWith}
                                    fullWidth={true}
                                    variant="contained"
                                    startIcon={
                                        <Avatar
                                            variant="square"
                                            src={linkedinImg}
                                            style={{ height: '24px', width: '24px' }}
                                        />
                                    }>
                                    Sign in with Linkedin
                                </Button>
                            </Grid>
                            <Grid item xs={6} className={classes.gridRight}>
                                <Button
                                    className={classes.signInWith}
                                    fullWidth={true}
                                    variant="contained"
                                    startIcon={
                                        <Avatar
                                            variant="square"
                                            src={googleImg}
                                            style={{ height: '24px', width: '24px' }}
                                        />
                                    }>
                                    Signin with Google
                                </Button>
                            </Grid>
                        </Grid>

                        <Button className={classes.forgot} size="small" endIcon={<ArrowForwardIosIcon />}>
                            Don't have an account? Register
                        </Button>
                    </Box>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={6} md={4} sm={12} >
                        <Box className={classes.banner} ></Box>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
};

export default Login;