import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useAuth } from '../contexts/authContext';
import { useFavoriteSubscription } from '../hooks/useFavoritesSubscription';
import { NotificationBell } from './notificationBell';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export type NavBarProps = {
}
/*
The navbar will always disply the logo and "BlockBook" along with a sign in/out button depending on the state of user and the feed and profile
user controls what displays and checks to see if there is a user logged in
it will automatically change depending on if a user logs in


 */
export const NavBar = ({}) => {
  const classes = useStyles();
  const  { user } = useAuth() 

  return (
    <div className="nav">
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <img src="/bb_logo.png" alt="BlockBook Logo" height="60" />
          <Typography variant="h6" className={classes.title}>
                <Link underline="none" color="inherit">
              BlockBook
            </Link>
            
          </Typography>
          {
              user ? 
                <Link underline="none" component={RouterLink} to="/signout" color="inherit">
                    <Button color="inherit">
                        Sign out
                    </Button>
                </Link>
               :
               <Link underline="none" to="/signin" component={RouterLink} color="inherit">
                    <Button color="inherit">
                        Sign In
                    </Button>
               </Link>
              
          }

            <Link underline="none" component={RouterLink} to="/" color="inherit">
              <Button color="inherit">
                Feed
              </Button>
            </Link>
            <IconButton color="inherit">
              <NotificationBell />
            </IconButton>
            <Link underline="none" component={RouterLink} to="/profile" color="inherit">
              <IconButton color="inherit">
                <Badge color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}