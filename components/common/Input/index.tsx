import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  name,
  label,
  formik,
  disabled = false,
  readOnly = false,
  required = false,
  type = "text",
  className,
  ...props
}: any) => {
  const { handleChange, values, errors, touched } = formik;
  return (
    <>
      <TextField
        fullWidth
        type={type}
        id={name}
        name={name}
        label={label}
        required={required}
        disabled={disabled}
        value={(values && values[name]) ?? ""}
        onChange={handleChange}
        error={touched[name] && Boolean(formik.errors[name])}
        className={className}
        InputProps={{
          readOnly: readOnly,
        }}
        {...props}
      />
      <div style={{ margin: "0px 0 10px", color: "red" }}>
        {touched[name] && errors[name]}
      </div>
    </>
  );
};

export default Input;
