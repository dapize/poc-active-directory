import { Box, CircularProgress } from "@mui/material";
import { loginRequest } from "../authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";

const OverlayLoading = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default OverlayLoading;
