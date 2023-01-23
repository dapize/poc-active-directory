import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import ResponsiveAppBar from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default Layout;
