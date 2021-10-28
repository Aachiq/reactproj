import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// icons of nav
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SubjectIcon from '@material-ui/icons/Subject';
import GroupIcon from '@material-ui/icons/Group';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import WorkIcon from '@material-ui/icons/Work';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PageviewIcon from '@material-ui/icons/Pageview';
import Routes from '../Routes'
import {Link} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  // style for list drop down 
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // state for List DropDown
  const [openAdm, setopenAdm] = React.useState(false);
  const [openFolder, setopenFolder] = React.useState(false);
  const [openDoc, setopenDoc] = React.useState(false);
  const [openPiece, setopenPiece] = React.useState(false);

  const handleClick = () => {
    setopenAdm(!openAdm);
  };
  const handleClick1 = () => {
    setopenFolder(!openFolder);
  };
  const handleClick2 = () => {
    setopenDoc(!openDoc);
  };
  const handleClick3 = () => {
    setopenPiece(!openPiece);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CrasfSoft
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.rootList}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <SupervisorAccountIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Administration" />
        {openAdm ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAdm} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PersonAddIcon color="secondary" style={{fontSize:20}} />
            </ListItemIcon>
            <ListItemText primary="ٌRoles" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <GroupWorkIcon color="secondary" style={{fontSize:20}}/>
            </ListItemIcon>
            <ListItemText primary="Groupes utilisateurs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <GroupIcon color="secondary" style={{fontSize:20}} />
            </ListItemIcon>
            <ListItemText primary="Utilisateurs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <WorkIcon color="secondary" style={{fontSize:20}} />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <KitchenIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Cabinet" />
      </ListItem>
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <FolderSharedIcon color="primary" style={{fontSize:20}}/>
        </ListItemIcon>
        <ListItemText primary="Dossiers" />
        {openFolder ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openFolder} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CreateNewFolderIcon color="secondary" style={{fontSize:20}}/>
            </ListItemIcon>
            <ListItemText primary="Dossiers" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <GroupAddIcon color="secondary" style={{fontSize:20}}/>
            </ListItemIcon>
            <ListItemText primary="Utlisateurs cabinets" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <InsertDriveFileIcon color="primary" style={{fontSize:20}} />
        </ListItemIcon>
        <ListItemText primary="Documents" />
        {openDoc ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openDoc} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/docDepot" style={{textDecoration:"none",color:"black"}}>
            <ListItem button className={classes.nested}>
             <ListItemIcon>
               <NoteAddIcon color="secondary" style={{fontSize:20}}/>
             </ListItemIcon > 
             <ListItemText primary="Depot document" />
            </ListItem>
          </Link>
          <Link to="/searchDepose" style={{textDecoration:"none",color:"black"}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FindInPageIcon color="secondary" style={{fontSize:20}}/>
            </ListItemIcon>
            <ListItemText primary="Recherche document" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <AttachmentIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Pièces comptables" />
        {openDoc ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPiece} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/searchIndexe" style={{textDecoration:"none",color:"black"}}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PageviewIcon color="secondary" style={{fontSize:20}}/>
            </ListItemIcon>
            <ListItemText primary="Recherche Doc indexé" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <SubjectIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Reporting" />
      </ListItem>
    </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div/>
      </main>
    </div>
  );
}
