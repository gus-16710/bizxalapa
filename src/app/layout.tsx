import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "✨ Una Idea Más 🎨",
  description: "¡Bienvenido al canal donde la inspiración nunca termina! 🚀 Aquí encontrarás una colección exclusiva de diseños gráficos, vectores editables y recursos creativos ideales para diseñadores, ilustradores y amantes del arte visual.",
  openGraph: {
    title: "✨ Una Idea Más 🎨",
    description: "¡Bienvenido al canal donde la inspiración nunca termina! 🚀 Aquí encontrarás una colección exclusiva de diseños gráficos, vectores editables y recursos creativos ideales para diseñadores, ilustradores y amantes del arte visual.",
    images: ["https://bizxalapa.unaideamas.com/img/image.jpg"],
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
