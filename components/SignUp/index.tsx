import Link from "next/link";
import { useFormik } from "formik";
import ButtonLoader from "../common/ButtonLoader";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Typography, Container, TextField } from "@mui/material";
import Copyright from "../common/Copyright";
import Input from "../common/Input";
import {
  imageExtension,
  signUpValidationSchema,
  signUpValue,
} from "../../common-utils";
import { signUpRequest } from "../../services/user.service";
import { toast } from "react-toastify";
import router from "next/router";
import { useState } from "react";
import { uploadFile } from "../../services/file.service";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const formik = useFormik({
    initialValues: signUpValue,
    validationSchema: signUpValidationSchema,
    onSubmit: async values => {
      try {
        if (!selectedFile) {
          toast.error("Select the picture");
          return;
        }
        if (values.confirmPassword !== values.password) {
          toast.error("Password & ConfirmPassword must be same");
        }

        const fileName = generateFilename("png");

        const { Location } = await uploadFile(selectedFile, fileName);

        const { confirmPassword, ...requestData } = values;

        const { data }: any = await signUpRequest({
          ...requestData,
          profilePic:
            Location ||
            "https://kurntt.com/storage/page/2949b649120803909359595219ef9bc3_1645144593_300px.jpg",
        });
        if (data) {
          formik.resetForm();
          toast.success("Account created successfully");
          router.push("/signin");
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const extension = file.name.split(".").pop()?.toLowerCase() || "";
      if (!imageExtension.includes(extension)) {
        toast.error("Only JPG, PNG, and JPEG images are allowed.");
        return;
      }

      setSelectedFile(file);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Input
              name="fullName"
              label="Full Name"
              formik={formik}
              onChange={formik.handleChange}
            />
            <Input
              name="userName"
              label="Username"
              formik={formik}
              onChange={formik.handleChange}
            />

            <Input
              name="email"
              label="Email"
              formik={formik}
              onChange={formik.handleChange}
            />

            <Input
              name="mobileNo"
              label="Mobile No"
              formik={formik}
              onChange={formik.handleChange}
            />

            <Input
              name="password"
              label="Password"
              type="password"
              formik={formik}
              onChange={formik.handleChange}
            />

            <Input
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              formik={formik}
              onChange={formik.handleChange}
            />

            <TextField
              id="selectFile"
              label="Choose a file"
              name="file"
              type="file"
              InputLabelProps={{ shrink: true }}
              onChange={handleFileUpload}
              inputProps={{
                accept: imageExtension.map(ext => `.${ext}`).join(","),
              }}
              fullWidth
            />

            <ButtonLoader
              type="submit"
              sx={{ mt: 5, fontSize: "15px" }}
              size="small"
              variant="contained"
              disabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
            >
              Sign Up
            </ButtonLoader>
            <Link href="/signin">
              <Typography
                mt={1}
                color={"secondary.main"}
                variant="subtitle2"
                gutterBottom
              >
                Already registered? Sign In
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Copyright sx={{ my: 4 }} />
    </Container>
  );
};

export default SignUp;

const generateFilename = (extension: string) => {
  const timestamp = new Date().getTime();
  const uniqueId = Math.random().toString(36).substring(2);
  return `${timestamp}${uniqueId}.${extension}`;
};
