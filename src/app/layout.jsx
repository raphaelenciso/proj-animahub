import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Animahub",
  description: "Watch anime for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
