import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import SideBar from "~/components/SideBar";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";

import styles from "../styles/app.css";

export default function Index() {
  return (
    <>
      <div className="bg-tycoon min-h-[calc(100vh-56px)]">
        <Navbar />
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="bg-cover object-cover min-h-screen min-w-full opacity-5 fixed"
        >
          <source src="/TransportTycoonTrailer.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-row items-center justify-center relative z-10">
          <div className="flex flex-col mx-auto text-neutral-100">
            <h1 className="font-bold text-5xl mb-14">Welcome to the Transport Tycoon web store</h1>
            <div className="flex flex-col gap-4">
              <p>
                Join our Discord server at <a href="https://discord.com/invite/tycoon" target="_blank" className="text-white font-bold drop-shadow-[0_0_1px_#ffffffa5]">discord.gg/tycoon!</a> Link your
                Discord account to your in-game account by typing <strong>!tycoon</strong> in a
                text channel!
              </p>
              <p>
                For more information about Transport Tycoon and Tycoon Gaming,
                check out the About page.
              </p>
              <hr className="border border-white/40"/>
              <p>
                Make sure you've properly created an account and linked it to
                the Transport Tycoon servers before proceeding.
              </p>
              <ol type="I" className="list-decimal ml-8">
                <li>
                  Create a <strong>FiveM Forums / Cfx.re Forums</strong> account at 
                  <a href="https://forum.cfx.re/" target="_blank" className="text-white font-bold drop-shadow-[0_0_1px_#ffffffa5]"> forum.cfx.re</a>
                </li>
                <li>Start up <strong>FiveM</strong> and go to the <strong>settings</strong> tab.</li>
                <li>Link your Forums account via the prompt.</li>
                <li>Join any <strong>Transport Tycoon</strong> server</li>
                <li>
                  Open <strong>M {">"} Player Options {">"} View / Manage Identifiers</strong>
                </li>
                <li>
                  Ensure that the "FiveM" identifier is <strong>green</strong>, if it's not,
                  simply <strong>select it in the menu and confirm</strong>.
                </li>
                <li>You can now use the shop without issues.</li>
              </ol>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}
