import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export const metadata = {
  title: "Animahub",
  description: "Watch anime for free",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
