import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "./components/Copyright";
import RowRadioButtonsGroup from "./components/RowRadioButtonsGroup";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import * as yup from "yup";
import { useFormik } from "formik";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const theme = createTheme();

  const validationSchema = yup.object({
    que1: yup.string().required("This question is required."),
    que2: yup.string().required("This question is required."),
  });

  const formik = useFormik({
    initialValues: {
      que1: "",
      que2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <SelfImprovementIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Chakra Test
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 5 }}
            >
              <RowRadioButtonsGroup
                Label="1. Do you generally feel free to act upon what you want?"
                name="que1"
                onChange={formik.handleChange}
                error={formik.touched.que1 && Boolean(formik.errors.que1)}
                helperText={formik.touched.que1 && formik.errors.que1}
              />
              <RowRadioButtonsGroup
                Label="2. Are you a very emotional and passionate person?"
                name="que2"
                onChange={formik.handleChange}
                error={formik.touched.que2 && Boolean(formik.errors.que2)}
                helperText={formik.touched.que2 && formik.errors.que2}
              />
              <RowRadioButtonsGroup Label="3. Are you a very emotional and passionate person?" />
              <RowRadioButtonsGroup Label="4. Do you regularly avoid particular situations?" />
              <RowRadioButtonsGroup Label="5. Are you good at thinking in words, symbols and concepts" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Results
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
