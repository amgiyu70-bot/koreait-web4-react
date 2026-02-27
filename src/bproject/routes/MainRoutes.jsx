import { Navigate, Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from "../constants/usermenu";
import { ADMI_ROUTES } from "../constants/adminmenu";
import LoginRoute from "./LoginRoute";

//import UserPage from "../layouts/user/UserPage";
//import AdminPage from "../layouts/admin/AdminPage";
import { lazy } from "react";
import AdminRoute from "./AdminRoute";

const isAdminPage = true;

const UserPage = lazy(() => import("../layouts/user/UserPage"));
const AdminPage = lazy(() => import("../layouts/admin/AdminPage"));


export default function MainRoutes() {

  if (isAdminPage) { 
    UserPage;
  } else {
    AdminPage;
  }

  return (    
     <Routes>       
    <Route  element={<UserPage />} >
          {PUBLIC_ROUTES.map((route)=>{
            return (
              <Route 
                key={route.key}
                path={route.path}
                element={route.element}
              />
            )
          })}

          <Route element={<LoginRoute />} >
            {PROTECTED_ROUTES.map((route)=>{
              return (
                <Route 
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              )
            })}
          </Route>        
        </Route>   
        <Route element={<AdminRoute />}>
          <Route element={<AdminPage />}>
              {ADMI_ROUTES.map((route)=> {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Route>
        </Route>
       
         {/* 404 처리 */}
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
  )
}
