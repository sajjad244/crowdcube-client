import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllCampaign from "../Components/AllCampaign";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import LoginForm from "../Pages/Login&Register/LoginForm ";
import RegisterForm from "../Pages/Login&Register/RegisterForm";
import AddCampaign from "../Components/AddCampaign ";
import DetailsPage from "../Pages/DetailsPage";
import PrivetRoutes from "./PrivetRoutes";
import MyCampaign from "../Components/MyCampaign";
import MyDonation from "../Components/MyDonation";
import UpdatePage from "../Components/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-pink-two.vercel.app/myCampaigns"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivetRoutes>
            <AddCampaign></AddCampaign>
          </PrivetRoutes>
        ),
      },
      {
        path: "/allCampaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () =>
          fetch("https://assignment-10-server-pink-two.vercel.app/myCampaigns"),
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path: "/view/:id",
        element: <DetailsPage></DetailsPage>,
        loader: () =>
          fetch("https://assignment-10-server-pink-two.vercel.app/myCampaigns"),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivetRoutes>
            <MyCampaign></MyCampaign>
          </PrivetRoutes>
        ),
        loader: ({params}) =>
          fetch(
            `https://assignment-10-server-pink-two.vercel.app/myCampaigns/${params.email}`
          ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivetRoutes>
            <UpdatePage></UpdatePage>
          </PrivetRoutes>
        ),
        loader: ({params}) =>
          fetch(
            `https://assignment-10-server-pink-two.vercel.app/myCampaigns/${params.id}`
          ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivetRoutes>
            <MyDonation></MyDonation>
          </PrivetRoutes>
        ),
        loader: ({params}) =>
          fetch(
            `https://assignment-10-server-pink-two.vercel.app/donations/${params.email}`
          ),
      },
    ],
  },
]);

export default router;
