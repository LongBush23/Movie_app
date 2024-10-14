import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <p>Footers</p>
    </div>
  );
};
export default RootLayout;
