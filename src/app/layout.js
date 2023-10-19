import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/nextui/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Forecast | Dashboard",
  description: "Weather Forecast Control Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
