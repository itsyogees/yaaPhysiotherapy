import { Poppins } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";


const poppins = Poppins({
  weight:['500', '700'],
  subsets:["latin"]
});

export const metadata = {
  title: "YAA Physiotherapy Clinic",
  description: "Pain, mobility and wellness center",
  keywords: "YAA Physiotherapy Clinic, Physiotherapy services near me, Pain management and rehabilitation, Mobility improvement clinic, Best physiotherapy clinic in Chennai, Wellness and physiotherapy center, Manual therapy specialists, Physiotherapy for chronic pain relief, Physiotherapy for sports injuries, Physical health and wellness"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar/>
        {children}
        <Footer/>
       </body>
    </html>
  );
}
