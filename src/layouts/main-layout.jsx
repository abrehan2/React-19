// IMPORTS -
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
};
