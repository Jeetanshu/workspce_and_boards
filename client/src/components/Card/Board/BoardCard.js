import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { deleteBoard } from '../../../actions/board.js';
import { editBoard } from '../../../actions/board.js';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  deleteIcon : {
    color: '#e60000',
    marginRight: '0px',
  },
  descriptionTextField : {
    marginTop: '20px',
    marginBottom: '10px',
  },
}));

function BoardCard({ board }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [boardData, setBoardData] = useState({
    title: board.title,
    description: board.description,
  });

  useEffect(() => {
    if (boardData) 
        setBoardData(boardData);
  }, [boardData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBoard(board._id, boardData));
    setOpen(false);
    window.location.reload(false);
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1"
        />
        <CardHeader
          title={<h3>{board.title}</h3>}
          action={
            <IconButton aria-label="edit">
              <EditIcon style={{ color: '#404040' }} onClick={handleClickOpen} />
            </IconButton>
          }
        />
        {
          board.description ? 
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {board.description}
              </Typography>
            </CardContent> : null
        }
        <CardActions>
          <IconButton aria-label="delete-icon">
            <DeleteIcon className={classes.deleteIcon} onClick={() => {
                dispatch(deleteBoard(board._id))
                window.location.reload(false);
              }
            }
            />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit the Board</DialogTitle>
        <DialogContent>
          <TextField name="title" label="Title" varient="outlined" fullWidth value={boardData.title} onChange={(e) => setBoardData({ ...boardData, title: e.target.value })} />
          <TextField className={classes.descriptionTextField} name="description" label="Description" varient="outlined" fullWidth value={boardData.description} onChange={(e) => setBoardData({ ...boardData, description: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: '#FFFFFF', backgroundColor: '#000000', }} onClick={handleSubmit} color="primary">
            Update
          </Button>
          <Button style={{ color: '#FFFFFF', backgroundColor: '#1A1A1A', }} onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BoardCard;