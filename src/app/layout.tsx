import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Império Drywall & Elétrica | Especialistas em BH",
  description: "Especialistas em Drywall, Gesso e Elétrica Padrão Cemig em Belo Horizonte. Orçamento sem compromisso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${instrumentSans.variable} scroll-smooth antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
