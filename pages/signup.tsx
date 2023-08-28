import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";
import SignUpComponent from "../components/SignUp";

const Signup: NextPage = () => {
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return <SignUpComponent />;
};

export default Signup;
