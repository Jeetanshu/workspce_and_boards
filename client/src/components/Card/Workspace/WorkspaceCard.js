import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import { deleteWorkspace } from '../../../actions/workspace.js';
import { editWorkspace } from '../../../actions/workspace.js';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
    backgroundColor: '#1a1a1a',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon : {
    color: '#e60000',
  },
  descriptionTextField : {
    marginTop: '20px',
    marginBottom: '10px',
  },
}));

export default function WorkspaceCard({ workspace, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const [workspaceData, setWorkspaceData] = useState({
    title: workspace.title,
    description: workspace.description,
  });

  useEffect(() => {
    if (workspaceData) 
        setWorkspaceData(workspaceData);
  }, [workspaceData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openWorkspace = (e) => {
    history.push(`/boards/${workspace._id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editWorkspace(workspace._id, workspaceData));
    setOpen(false);
    window.location.reload(false);
  }

  return (
    <>
      <Card className={classes.root}>
        <div>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar} onClick={openWorkspace}>
                {
                  workspace.title ? workspace.title[0] : null
                }
              </Avatar>
            }
            title={<h2 onClick={openWorkspace}>{workspace.title}</h2>}
            action={<>
              <IconButton aria-label="person">
                <PersonIcon style={{ color: '#404040' }} />
                <p style={{ fontSize: '12px' }} >{parseInt((Math.random()*10)+1)}</p>
              </IconButton>
              <IconButton aria-label="edit">
                <EditIcon style={{ color: '#404040' }} onClick={handleClickOpen} />
              </IconButton>
              </>
            }
          />
        </div>
        <div onClick={openWorkspace}>
          {
            workspace.description ? 
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <h5>
                    {workspace.description}
                  </h5>
                </Typography>
              </CardContent> : null
          }
        </div>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon style={{ color: '#404040' }} />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon style={{ color: '#404040' }} />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon className={classes.deleteIcon} onClick={() => {
                dispatch(deleteWorkspace(workspace._id))
                window.location.reload(false);
              }
            }
            />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle>Edit the Workspace</DialogTitle>
          <DialogContent>
            <TextField name="title" label="Title" varient="outlined" fullWidth value={workspaceData.title} onChange={(e) => setWorkspaceData({ ...workspaceData, title: e.target.value })} />
            <TextField className={classes.descriptionTextField} name="description" label="Description" varient="outlined" fullWidth value={workspaceData.description} onChange={(e) => setWorkspaceData({ ...workspaceData, description: e.target.value })} />
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
    </>
  );
}