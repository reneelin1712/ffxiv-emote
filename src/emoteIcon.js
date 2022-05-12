import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

import EmoteCard from './emoteCard'


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const iconList = [
  "https://xivapi.com/i/064000/064413_hr1.png" ,
  "https://xivapi.com/i/064000/064413_hr1.png" ,
  "https://xivapi.com/i/064000/064413_hr1.png" 
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function EmoteIcon() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  // const [iconsList, setIconsList] = React.useState(false);

  useEffect(()=>{
    fetch('https://xivapi.com/emote')
  .then(response => response.json())
  .then(data => console.log(data.Results.map((icon,id)=> "https://xivapi.com".concat
  (icon.Icon))))


  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>

    {iconList.map((url,key) =>
    <div key={key}>
       <Button  > 
       <Avatar onClick={handleClickOpen} style={{ borderRadius: 0 }} alt="Eat Pizza" src={url}/>
       </Button>
   
    </div>
    
    )}

    <Button  onClick={handleClickOpen}>
    <Avatar style={{ borderRadius: 0 }} alt="Eat Pizza" src="https://xivapi.com/i/064000/064413_hr1.png" />
     
      </Button>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Grid container spacing={1}>
  <Grid item >
    <Avatar  style={{ borderRadius: 0 }} alt="Eat Pizza" src="https://xivapi.com/i/064000/064413_hr1.png" />
   
  </Grid>
  <Grid item >
 Modal title
  </Grid>
  </Grid>
     
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <EmoteCard/>
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Download Gif
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
