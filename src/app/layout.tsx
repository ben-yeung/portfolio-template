import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/provider/NextThemeProvider/NextThemeProvider";


const roboto = Roboto_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Template created by Ben Yeung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
