import type { Metadata } from "next";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kindred",
  description: "Small problems, collective solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-background text-on-background antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
