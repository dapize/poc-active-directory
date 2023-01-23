import { Outlet } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Layout from "../components/Layout";
import OverlayLoading from "../components/OverlayLoading";

const Private = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <Layout>
          <Outlet />
        </Layout>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <OverlayLoading />
      </UnauthenticatedTemplate>
    </>
  );
};

export default Private;
