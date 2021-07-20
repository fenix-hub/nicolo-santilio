import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 9999,
        position: 'fixed',
        top: '2vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        [theme.breakpoints.up('xs')]: {
            right: '2%',
            backgroundColor: 'rgb(220,220,220,0.7)',
        },
        [theme.breakpoints.up('lg')]: {
            right: '2%',
        },
    }
})
)

const Scroll = () => {

    const classes = useStyles();

    
    const handleClick = () => {
        var header = document.getElementById("customHeader");
        header = document.getElementById("customHeader");
        header.style.visibility = (header.style.visibility === 'hidden' ? 'visible' : 'hidden')
    }

    return (
        <div>
            <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                <MenuIcon />
            </IconButton>
        </div>
    )
}
export default Scroll