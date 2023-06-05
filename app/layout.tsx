import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
