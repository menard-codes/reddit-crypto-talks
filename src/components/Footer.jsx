import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footerBox: {
        backgroundColor: '#ffb38a',
        padding: '20px'
    },
    siteDesc: {
        display: 'block'
    }
}))

function Footer() {
    const classes = useStyles();
    // link my account to my name later
    return (
        <footer className={classes.footerBox}>
            <Typography>Created by: Menard D. Maranan</Typography>
            <small className={classes.siteDesc}>Simple reddit webscraper about crypto.</small>
            <small className={classes.siteDesc}>Backend: Python's Flask for API with headless selenium as web scraper</small>
            <small className={classes.siteDesc}>Frontend: React with Material UI</small>
        </footer>
    )
}

export default Footer
