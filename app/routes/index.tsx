import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import SideBar from "~/components/SideBar";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";

import styles from "../styles/app.css";

export default function Index() {
  return (
    <>
      <div className="bg-tycoon h-[calc(100vh-56px)]">
        <Navbar />
        <video autoPlay={true} muted={true} loop={true} className="bg-cover object-cover h-[calc(100vh-136px)] opacity-5 fixed">
          <source src="/TransportTycoonTrailer.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-row relative z-10">
          <div className="flex flex-col">
            <h1>asdfasdfasdfasdfasdf</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui a
              aliquam iusto voluptas architecto. Autem voluptatibus itaque
              nostrum enim voluptatum?
            </p>
          </div>
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}
