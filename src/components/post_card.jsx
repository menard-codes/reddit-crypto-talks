import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(() => ({
  paper: {
    backgroundColor: '#fff',
    width: '90vw',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '20px',
    boxShadow: '0 0 10px #000'
  }
}))


function PostCard({postTitle, upvotes, date_posted, link}) {
    const classes = useStyle()

    return (
        <div className={classes.paper}>
          <Typography variant="h6">{postTitle}</Typography>
          <Typography>Reddit Upvotes: {upvotes}</Typography>
          <Typography>{date_posted}</Typography>
          <a href={link} rel="noreferrer" target="_blank">Read on Reddit...</a>
        </div>
    )
}

export default PostCard
