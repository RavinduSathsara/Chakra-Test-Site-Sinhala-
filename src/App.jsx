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
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

function App() {
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

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const data = {
    labels: ["Root", "Sacral", "Navel", "Heart", "Throat", "Brow", "Crown"],
    datasets: [
      {
        data: [-1, 1, -4, 3, 4, 2, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Results Chart",
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

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
            <Bar data={data} options={options} horizontal={false}></Bar>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
