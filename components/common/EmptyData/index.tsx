import { Box, Typography } from "@mui/material";
import React from "react";
import { EmptyDataMessaeProps } from "../../../common-utils";
// import { EmptyDataMessaeProps } from "../../common-utils";
// import { EmptyDataSvg } from "../SvgIcon/emptyData";

const EmptyDataMessage = ({
  message,
  // imageWidth,
  // imageHeight,
  secondMessage,
  height,
}: EmptyDataMessaeProps) => {
  return (
    <>
      <Box height={height ? height : "300px"}>
        {/* <EmptyDataSvg width={imageWidth} height={imageHeight} /> */}
        <Typography fontWeight="bold" width="100%" textAlign="center">
          {message}
        </Typography>
        <Typography color="#625B71" textAlign="center">
          {secondMessage}
        </Typography>
      </Box>
    </>
  );
};

export default EmptyDataMessage;
