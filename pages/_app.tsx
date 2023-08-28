import theme from "../common-utils/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";
// import AWS from "aws-sdk";

function MyApp({ Component, pageProps }: AppProps) {
  // AWS.config.update({
  //   accessKeyId: S3_ACCESS_KEY
  //   secretAccessKey: S3_SECRET_KEY
  //   region: S3_REGION
  // });
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position={"top-right"} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
