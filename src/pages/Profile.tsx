import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { getUserData, IUserDataResponse } from "../services/userData";

let controller: AbortController;

const Profile = () => {
  const { instance } = useMsal();
  const [userData, setUserData] = useState<IUserDataResponse | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      controller = new AbortController();
      const { data } = await getUserData(instance, controller.signal);
      setUserData(data);
    })();

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, []);

  return (
    <ul>
      {!!userData && (
        <>
          <li>displayName: {userData.displayName}</li>
          <li>givenName: {userData.givenName}</li>
          <li>id: {userData.id}</li>
          <li>jobTitle: {userData.jobTitle}</li>
          <li>mail: {userData.mail}</li>
          <li>mobilePhone: {userData.mobilePhone}</li>
          <li>officeLocation: {userData.officeLocation}</li>
          <li>preferredLanguage: {userData.preferredLanguage}</li>
          <li>surname: {userData.surname}</li>
          <li>userPrincipalName: {userData.userPrincipalName}</li>
        </>
      )}
    </ul>
  );
};

export default Profile;
