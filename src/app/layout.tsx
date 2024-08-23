import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biz Xalapa 🏵️",
  description: "Tu revista digital 🛍️",
  openGraph: {
    title: "Biz Xalapa 🏵️",
    description: "Tu revista digital 🛍️",
    images: ["https://bizxalapa.unaideamas.com/img/front-page-example.jpg"],
  },
  metadataBase: new URL("https://bizxalapa.unaideamas.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
