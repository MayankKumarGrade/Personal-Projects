import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Connect",
  description: "A cloud storage web application",
  icons: "/cloud-connect.png"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
