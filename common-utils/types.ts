import { SxProps, Theme } from "@mui/material";

export interface IconProps {
  name: string;
  sx?: SxProps<Theme>;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
  sx?: SxProps<Theme>;
}

export interface MuiDialogProps {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface TableProps {
  numSelected?: number;
  title?: string;
  data: Array<any>;
  headerData: Array<any>;
  checkBoxVisible?: boolean;
  allSelectCheckBoxVisible?: boolean;
  userRoleInWorkspace?: string;
  onDelete?: (
    event: React.MouseEvent<HTMLElement>,
    id: string,
    worspaceId: string
  ) => void;
  onEdit?: (event: React.MouseEvent<HTMLElement>, values: any) => void;
  handleShareClick?: (value: string) => void;
  handleOneTimeLink?: (value: string) => void;
  handlProjectFormsDelete?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => void;
}

export interface TableToolbarProps {
  numSelected?: number;
  title: string;
  onDelete?: () => void;
}

export interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  loading?: "lazy" | "eager";
}

export interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  variant: "contained" | "outlined" | "text";
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  loader?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  tooltipMessage?: string;
}

export interface TableHeaderData {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  loading?: "lazy" | "eager";
}

export interface EmptyDataMessaeProps {
  message?: string;
  imageWidth?: string;
  imageHeight?: string;
  secondMessage?: string;
  height?: string;
}
