import React from 'react'
import Typography from '@material-ui/core/Typography';
import PostCard from './post_card';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    title: {
        padding: '20px'
    },
    note: {
        marginLeft: '20px'
    },
    noteStrong: {
        color: '#f44336'
    }
  }));

function SectionContent({index, title, content, currentTabValue}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {index === currentTabValue && (
                <Grid container>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h4" >
                            {title}
                        </Typography>
                    </Grid>
                    <Typography variant="body1" className={classes.note}>
                        <strong className={classes.noteStrong}>NOTE</strong>: The Reddit Web Scraping bot for this site was paused. Data were outdated.
                    </Typography>
                    <Grid item xs={12}>
                        {content.map((post) => (
                            <PostCard
                                key={post['link']}
                                postTitle={post['post_title']}
                                upvotes={post['upvotes']}
                                date_posted={post['date_posted']}
                                link={post['link']} />
                            )
                        )}
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default SectionContent
