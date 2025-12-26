import { Inter, Cormorant_Garamond, Poppins, Montserrat, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cor",
  weight: ["300", "400", "500", "600", "700"],
});


const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"], // You can specify other subsets if needed
  weight: ["400", "700"], // Specify the weights you want to use
  variable: "--font-mon",
});

export const metadata = {
  title: "Nishat",
  description: "MERN Developer",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${cormorant.variable}  ${poppins.variable} ${montserrat.variable} ${notoSans.variable}  font-cor  antialiased`} lang="en">

      <body>

        {children}
      </body>
    </html>
  );
}
