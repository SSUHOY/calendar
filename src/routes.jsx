import { Route, Routes } from "react-router";
import Main from "./pages/mainPage";
import UserPage from "./pages/userPage";
import NotFound from "./pages/notFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
