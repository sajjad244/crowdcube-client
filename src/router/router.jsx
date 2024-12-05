import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllCampaign from "../Components/AllCampaign";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import LoginForm from "../Pages/Login&Register/LoginForm ";
import RegisterForm from "../Pages/Login&Register/RegisterForm";
import AddCampaign from "../Components/AddCampaign ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: "/allCampaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
    ],
  },
]);

export default router;
