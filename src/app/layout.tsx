import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const geistAfacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estevam Dev",
  description: "João Estevam Professional Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistAfacad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
