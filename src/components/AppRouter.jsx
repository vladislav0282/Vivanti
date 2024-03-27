import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRouters } from "../routers";
import { START_ROUTE } from "../utils/constants";
import style from "./appRouter.module.css";

const AppRouter = () => {
  return (
    <div className={style.appcontainer}>
      <Routes>
        {publicRouters.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to={START_ROUTE} replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
