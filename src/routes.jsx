import { Route, Routes } from "react-router";
import Main from "./pages/mainPage";
import UserPage from "./pages/userPage";
import NotFound from "./pages/notFound";
import { useState } from "react";

const AppRoutes = () => {
  const [userData, setUserData] = useState();

  return (
    <Routes>
      <Route path="/" element={<Main userData={userData}/>} />
      <Route path="/user" element={<UserPage setUserData={setUserData}/>} />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
