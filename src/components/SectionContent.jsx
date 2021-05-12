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
                    <Grid item xs={12}>
                        {/* {mockData.map((title, index) => <PostCard key={title} index={index} title={title} />)} */}
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
