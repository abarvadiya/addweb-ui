import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import SignInComponent from "../components/SignIn";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";

const SignIn: NextPage = () => {
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return <SignInComponent />;
};

export default SignIn;
