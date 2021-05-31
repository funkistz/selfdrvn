import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Hidden,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BannerImage1 from "../images/116 1.png";

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        marginTop: 15,
        padding: 32,
        borderRadius: 14,
        backgroundColor: '#FFEFE4',
        overflow: 'visible'
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
    bannerImage: {
        marginTop: -93,
        // position: 'absolute',
        // top: 108,
        // right: 160
    },
    bannerImageWrapper: {
        maxHeight: 90,
        textAlign: 'right'
    }
}));

const Banner1 = () => {

    const classes = useStyles();
    return (
        <Card elevation={0} className={classes.banner}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={12}>
                        <Typography className={classes.bannerTitle}>
                            Advance Yourself. Earn Recognition Points. And Help Others Too.
                    </Typography>
                        <Typography className={classes.bannerText} >
                            Meet your goals. Learn something new. Collaborate with others. This week there are 12 new quests available.
                    </Typography>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={6} md={12} className={classes.bannerImageWrapper}>
                            <img src={BannerImage1} className={classes.bannerImage} />
                        </Grid>
                    </Hidden>
                    <Hidden lgUp>
                        <Grid item lg={6} md={12} >
                            <img src={BannerImage1} />
                        </Grid>
                    </Hidden>

                </Grid>

            </CardContent>
        </Card>
    )
};

export default Banner1;