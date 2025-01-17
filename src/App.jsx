import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Welcome from "./pages/Welcome"; 
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import "./styles/main.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/project_react", 
      element: <RegistrationPage />, 
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/step-one",
      element: <StepOne />,
    },
    {
      path: "/step-two",
      element: <StepTwo />,
    },
    {
      path: "/step-three",
      element: <StepThree />,
    },
    {
      path: "/step-four",
      element: <StepFour />,
    },
    {
      path: "/thanks",
      element: <Thanks />,
    },

  ]);
  return <RouterProvider router={router} />;
};

export default App;


