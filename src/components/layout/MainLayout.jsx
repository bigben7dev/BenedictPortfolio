import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { BottomNavbar } from "./BottomNavbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pb-24 lg:pb-0">
        <Outlet />
      </main>

      <Footer />

      <BottomNavbar />
    </>
  );
}
