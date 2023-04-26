import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

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
import ChakraStatusLabels from "./components/ChakraStatusLabels";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [rootResult, setRootResult] = useState(0);
  const [open, setOpen] = useState(false);

  function averagePercentage(num1, num2, num3, num4) {
    const average =
      (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)) / 4;
    const percentage = average * 100;
    return percentage / 2;
  }

  const theme = createTheme();

  const validationSchema = yup.object({
    que1: yup.string().required("පිලිතුරක් අවශ්‍යයි."),
    que2: yup.string().required("පිලිතුරක් අවශ්‍යයි."),
    que3: yup.string().required("පිලිතුරක් අවශ්‍යයි."),
    que4: yup.string().required("පිලිතුරක් අවශ්‍යයි."),
  });

  const formik = useFormik({
    initialValues: {
      que1: "",
      que2: "",
      que3: "",
      que4: "",
      que5: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setOpen(true);
      setRootResult(
        averagePercentage(
          values?.que1,
          values?.que2,
          values?.que3,
          values?.que4
        )
      );
    },
  });

  const handleClose = () => setOpen(false);

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const data = {
    labels: ["Root", "Sacral", "Navel", "Heart", "Throat", "Brow", "Crown"],
    datasets: [
      {
        data: [rootResult?.toFixed(2), 40, 37, -47, 47, -22, 14],
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

  console.log(rootResult);

  const options = {
    title: {
      display: true,
      text: "Results Chart",
    },
    legend: {
      display: true,
    },
    // scales: {
    //   xAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          style={{
            backgroundColor: "#E1F5FE",
            minHeight: "100vh", // sets the height to fill the viewport
          }}
          component="main"
          maxWidth="xs"
        >
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
                Label="1. අවශ්‍ය විටෙක තමාගේ ස්ථාවරයේ සිටීමට ඔබට හැකි ද?"
                name="que1"
                onChange={formik.handleChange}
                error={formik.touched.que1 && Boolean(formik.errors.que1)}
                helperText={formik.touched.que1 && formik.errors.que1}
              />
              <RowRadioButtonsGroup
                Label="2. ලෙන්ගතුබාවය සහ රාගය යන දෙකේදී ඔබට සුවපහසු බවක් දැනෙනවාද?"
                name="que2"
                onChange={formik.handleChange}
                error={formik.touched.que2 && Boolean(formik.errors.que2)}
                helperText={formik.touched.que2 && formik.errors.que2}
              />
              <RowRadioButtonsGroup
                Label="3. දේවල් සිතින් මවා ගැනීම ඔබට අපහසුද?"
                name="que3"
                onChange={formik.handleChange}
                error={formik.touched.que3 && Boolean(formik.errors.que3)}
                helperText={formik.touched.que3 && formik.errors.que3}
              />
              <RowRadioButtonsGroup
                Label="4. ඔබේ ආවේගයන් ගැන ඔබ ලැජ්ජාවට පත් වෙනවාද?"
                name="que4"
                onChange={formik.handleChange}
                error={formik.touched.que4 && Boolean(formik.errors.que4)}
                helperText={formik.touched.que4 && formik.errors.que4}
              />
              <RowRadioButtonsGroup Label="5. ඔබ වැඩිපුර කතා කිරීමට නැඹුරුද?" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Results
              </Button>
            </Box>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Bar data={data} options={options}></Bar>
                  <Typography mt={1} variant="body" align="left">
                    Percentages go from -100% to 100%
                  </Typography>
                  <ChakraStatusLabels root={rootResult?.toFixed(2)} />
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
