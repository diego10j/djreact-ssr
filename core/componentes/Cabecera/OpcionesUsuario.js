

import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';


export default function OpcionesUsuario() {

    


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: { width: 250 },
                }}
            >
                <List
                    component="nav"
                >
                    <ListItem
                        alignItems="flex-start"
                    >
                        <ListItemText
                            primary={
                                <Typography
                                    variant="button"
                                    display="block"
                                    gutterBottom
                                >
                                    Diego Jácome
                                </Typography>
                            }
                            secondary={
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    diego10j.89@hotmail.com
                                </Typography>
                            }
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography
                                variant="body1"
                                >
                                   Mi Perfil
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <VpnKeyIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Cambiar Contraseña" />
                    </ListItem>
                    <ListItem>
                        <Button
                            variant="outlined"
                            startIcon={<ExitToAppIcon />}
                            color="primary"
                            fullWidth >Salir</Button>
                    </ListItem>
                </List>
            </Popover>
        </>
    );
}