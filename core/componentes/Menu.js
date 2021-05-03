

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    list: {
        width: '100%',
    },
    menuButton: {
        marginRight: 10,
    },
    drawerPaper: {
        width: '304px',
        minWidth: 'auto',
        maxWidth: 'auto',
        height: '100%',
        minHeight: 'auto',
        maxHeight: 'auto',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(/img/nav.png)',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        background: '#252c33',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
});

export default function Menu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {list()}
            </Drawer>
        </div>
    );
}

