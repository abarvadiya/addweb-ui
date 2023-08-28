import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const [hasAccessToken, setHasAccessToken] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setHasAccessToken(accessToken !== null);
  }, []);

  return hasAccessToken;
};
