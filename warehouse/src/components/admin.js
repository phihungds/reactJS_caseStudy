import React from "react";
import { Popover, Typography, Button, Avatar, List, ListItem, Paper } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

export default function UserManage() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined;
    const navigate = useNavigate()
    return (
        <div>

            <Avatar onClick={handleClick}>

                <AccountCircleIcon />

            </Avatar>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List sx={{ bgcolor: "#3f51b5" }}>
                    <ListItem button sx={{ color: "white" }}>Profile</ListItem>
                    <ListItem button onClick={() => {
                        navigate('/manager')
                    }} sx={{ color: "white" }}>
                        Manage warehouse (admin only)</ListItem>
                    <ListItem button onClick={() => {
                        navigate('/')
                    }} sx={{ color: "white" }}>Sign out</ListItem>
                </List>
            </Popover>
        </div>
    )
}