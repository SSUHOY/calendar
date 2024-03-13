import { Route, Routes } from "react-router";
import UserPage from "./pages/userPage";
import NotFound from "./pages/notFound";
import { useState } from "react";
import MainPage from "./components/Calendar";

const AppRoutes = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage userData={userData} setUserData={setUserData} />}
      />
      <Route
        path="/user"
        element={<UserPage userData={userData} setUserData={setUserData} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
