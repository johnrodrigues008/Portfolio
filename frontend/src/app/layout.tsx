import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import SiteShell from "./components/site-shell";
import { LocaleProvider } from "./i18n";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Rodrigues — Desenvolvedor Full Stack",
  description:
    "Portfólio de John Rodrigues, desenvolvedor full stack especializado em interfaces modernas, arquitetura de software e aplicações web de alta performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sourceSans.variable} ${montserrat.variable} ${geistMono.variable} ${sourceSans.className} antialiased  cz-shortcut-listen="true"` } 
      >
        <LocaleProvider>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
