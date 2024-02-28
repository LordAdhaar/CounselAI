import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import cn from "@/lib/utils";
import Providers from "@/components/providers";

import "react-loading-skeleton/dist/skeleton.css"
import "simplebar-react/dist/simplebar.min.css"; 
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className="light">
        <body className={cn("min-h-screen font-sans antialiased grainy ", inter.className) }>
          <Toaster/>
          <Navbar/>
          {children}
        </body>
      </html>
    </Providers>

  );
}
