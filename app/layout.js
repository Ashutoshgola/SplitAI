import { Geist, Geist_Mono } from "next/font/google";
import {Button,buttonVariants} from "@/components/ui/button";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Split AI",
  description: "Split AI - Your AI Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
<ClerkProvider>
  <ConvexClientProvider>
    <ThemeProvider>
      <Header/>
      <main className="min-h-screen">
        {children}
        <Toaster richColors/>
      </main>
    </ThemeProvider>
  </ConvexClientProvider>
</ClerkProvider>
      </body>
    </html>
  );
}
