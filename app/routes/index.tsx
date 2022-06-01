import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar"
import SideBar from "~/components/SideBar";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";

import styles from "../styles/app.css"

export default function Index() {
  return (
    <>
    <div className="bg-tycoon h-[calc(100vh-56px)]">
      <Navbar/>
      <SideBar/>
    </div>
      <Footer/>
    </>
  );
}
