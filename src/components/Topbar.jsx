import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

import RedditIcon from '@material-ui/icons/Reddit';
import ForumIcon from "@material-ui/icons/Forum";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyle = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#fff'
    },
    brand: {
        color: '#000'
    }
}))


function Topbar({openDrawer}) {
    const classes = useStyle()

    return (
        <>
            <AppBar position="fixed" className={classes.nav}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={openDrawer}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" className={classes.brand}>
                        <RedditIcon color="error" fontSize="large" />
                        <ForumIcon color="error" fontSize="small" />
                        <span style={{marginRight:"10px"}}></span>
                        Reddit Crypto Talks
                    </Typography>
                    </Toolbar>
            </AppBar>  
        </>
    )
}

export default Topbar;
