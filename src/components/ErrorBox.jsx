import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    dangerBox: {
        backgroundColor: '#ffc2c8',
        borderLeft: '5px solid #e30000',
        width: '50vw',
        height: '20vh',
        margin: '100px auto 0 auto',
        padding: '5px 20px',
        fontSize: '1.5rem'
    }
}))

function ErrorBox({errorMessage}) {
    const classes = useStyle();
    return (
        <div className={classes.dangerBox}>
            {errorMessage}
        </div>
    )
}

export default ErrorBox
