import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { FieldLogin } from "./pages/LoginPage/index.jsx"
import { FieldRegister } from "./pages/RegisterPage/index.jsx"
import { HomeUserPage } from "./pages/homeUserPage/index"
import { DateContext } from "./context/index"
import { ProtectedRoute } from "./utils/protecRouter";
import { CracharUser } from "./pages/crachaUserPage"
import {ExtratoPage} from "./pages/extratoUserPage"

import './assets/styles/global-styles.css'
import './assets/styles/global-styles-responsive.css'

export const MainRouters = () => {

  return (
    <BrowserRouter>
      <DateContext>
        <Routes>
          <>
            <Route path="/" element={<FieldLogin />} />
            <Route path="register" element={<FieldRegister />} />
            <Route
              path="home"
              element={
                <ProtectedRoute >
                  <HomeUserPage />
                </ProtectedRoute>
              }>
              <Route path="crachar" element={<CracharUser />} />
              <Route path="extrato" element={<ExtratoPage />} />

            </Route>
          </>
        </Routes>
      </DateContext>
    </BrowserRouter>
  )
}