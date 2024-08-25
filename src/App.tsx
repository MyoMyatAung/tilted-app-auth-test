import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPath } from "./libs/constants";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPath.HOME} element={<HomePage />} />
        <Route path={RoutesPath.SIGN_IN} element={<SignInPage />} />
        <Route path={RoutesPath.SIGN_UP} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
