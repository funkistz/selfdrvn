import {
    IconButton,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) => ({
    alert: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: '#0062FF',
        color: '#ffffff',
        borderRadius: 0,
        padding: 9,
        fontSize: 14,
        textAlign: 'center',
        marginLeft: 'inherit'
    },
    removeBtn: {
        padding: 0,
        marginLeft: 5,
        color: '#ffffff',
        fontSize: 18
    }
}));

const TopAlert = () => {

    const classes = useStyles();
    return (
        <span className={classes.alert} >
            Starting from 18 March 2020, all employee of Nettium and Selfdrvn must work from home due to Covid-19
            <IconButton aria-label="delete" className={classes.removeBtn}>
                <ClearIcon />
            </IconButton>
        </span>
    )
};

export default TopAlert;