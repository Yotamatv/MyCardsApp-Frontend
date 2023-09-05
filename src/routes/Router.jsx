import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardsPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCards from "../cards/pages/MyCards";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import EditUser from "../users/pages/EditUser";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import UserProfile from "../users/pages/UserProfile";
import ROUTES from "./routesModel";
import MyAppBar from "../layout/header/topNavBar/rightNavBar/MyAppBar";
import EditCard from "../cards/pages/EditCard";
import CreateCard from "../cards/pages/CreateCard";
import PaymentPage from "../payment/components/PaymentPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={"payment"} element={<PaymentPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCard />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCard />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path="appBar" element={<MyAppBar />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
