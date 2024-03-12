import MainPage from "./components/Calendar";
import { GlobalStyle } from "./components/styles/global/Global.styles";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
