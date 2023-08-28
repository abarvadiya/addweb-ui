import Link from "next/link";
import { useFormik } from "formik";
import ButtonLoader from "../common/ButtonLoader";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Typography, Container } from "@mui/material";
import Copyright from "../common/Copyright";
import Input from "../common/Input";
import { signInValidationSchema, signInValue } from "../../common-utils";
import { signInRequest } from "../../services/user.service";
import { toast } from "react-toastify";
import router from "next/router";

const SignIn = () => {
  const formik = useFormik({
    initialValues: signInValue,
    validationSchema: signInValidationSchema,
    onSubmit: async values => {
      try {
        const { data }: any = await signInRequest(values);
        if (data) {
          formik.resetForm();
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.refreshToken);
          router.push("/");
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

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
            Sign in
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <Input
            name="userNameOrEmail"
            label="Username Or Email"
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

          <ButtonLoader
            type="submit"
            sx={{ mt: 5, fontSize: "15px" }}
            size="small"
            variant="contained"
            disabled={formik.isSubmitting}
            isLoading={formik.isSubmitting}
          >
            Sign In
          </ButtonLoader>
          <Link href="/signup">
            <Typography
              mt={1}
              color={"secondary.main"}
              variant="subtitle2"
              gutterBottom
            >
              Don&apos;t have an account? Sign Up
            </Typography>
          </Link>
        </Box>
      </Box>
      <Copyright sx={{ my: 4 }} />
    </Container>
  );
};

export default SignIn;
