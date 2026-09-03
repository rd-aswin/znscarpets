import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Top Flooring Company in Dubai | Flooring Suppliers in Dubai",
  description: "Z&S Carpets",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}

