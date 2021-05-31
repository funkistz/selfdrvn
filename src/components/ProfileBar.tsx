import React from 'react';
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#252631',
            width: '100%',
            color: '#ffffff',
            '& .MuiListItemSecondaryAction-root': {
                right: 24
            },
            '& li': {
                listStyleType: 'none'
            }
        },
        item: {
            paddingBottom: 32,
            paddingLeft: 32,
            paddingRight: 32,
        },
        itemText: {
            color: '#ffffff',
            '& .MuiListItemText-secondary': {
                color: '#ffffff',
            }
        }
    }));

export default function ProfileBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListItem className={classes.item}>
                <ListItemAvatar>
                    <Avatar
                        src='https://www.clipartkey.com/mpngs/m/118-1188761_avatar-cartoon-profile-picture-png.png'
                    />
                </ListItemAvatar>
                <ListItemText id='1' primary='Sudhan HH' secondary="Admin" className={classes.itemText} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="info" className={classes.itemText}>
                        <MoreHorizRoundedIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );

}