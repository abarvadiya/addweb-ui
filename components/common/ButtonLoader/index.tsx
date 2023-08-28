import React from "react";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import { ButtonProps } from "../../../common-utils";

const ButtonLoader = ({
  variant,
  children,
  onClick,
  color,
  size,
  isLoading,
  type,
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <Button
        type={type}
        size={size}
        variant={variant}
        fullWidth
        color={color}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={className}
        {...props}
      >
        {isLoading ? <CircularProgress size={19} /> : children}
      </Button>
    </div>
  );
};

export const ButtonWithTooltip = ({
  tooltipMessage,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Tooltip title={disabled ? tooltipMessage : ""}>
      <div>
        <ButtonLoader {...props} disabled={disabled} />
      </div>
    </Tooltip>
  );
};

export default ButtonLoader;
