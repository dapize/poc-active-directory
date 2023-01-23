import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const ResponsiveAppBar = () => {
  const { instance } = useMsal();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleLogout = () => {
    setAnchorElUser(null);
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color="#fff"
            sx={{ textDecoration: "none" }}
            mr={4}
          >
            POC - AD
          </Typography>

          <Box display="flex" flexGrow={1}>
            <Button sx={{ my: 2, color: "white" }} component={Link} to="/">
              Home
            </Button>
            <Button
              sx={{ my: 2, color: "white" }}
              component={Link}
              to="/profile"
            >
              Profile
            </Button>
          </Box>

          <Box flexGrow={0}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src={avatarUrl} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              <MenuItem onClick={() => handleLogout()}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
