import {
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function ImportCallendar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2, border: "1px solid lightgray" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <SyncIcon fontSize="inherit" color="primary" />
          </IconButton>
        </Tooltip>
      </Grid>
      {/** MENU */}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxIcon color="primary" />
          </ListItemIcon>
          Google Callendar
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxIcon color="primary" />
          </ListItemIcon>
          Google Maps
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxIcon color="primary" />
          </ListItemIcon>
          Wallet/eTicket
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon color="default" />
          </ListItemIcon>
          Garmin SmartWatch
        </MenuItem>
        {/* <Divider />
         <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxIcon color="primary" />
          </ListItemIcon>
          H&M Loyality Program
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon color="default" />
          </ListItemIcon>
          CCC Loyality Program
        </MenuItem> */}
      </Menu>
    </Grid>
  );
}
