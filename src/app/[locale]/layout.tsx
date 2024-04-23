import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations, useLocale } from "next-intl";
import "./globals.css";

const montse = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Mujer Alada",
  description: "Fundación Marlene Velázquez. Apoyo educativo para niñas de escasos recursos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const t = useTranslations('Navbar')
    const currentLocale = useLocale();

    const translations = {
        home: t('home'),
        about: t('about'),
        join: t('join'),
        donations: t('donation')
    }

  return (
    <html lang="en">

      <body className={`${montse.className} flex flex-col items-center`}>
        <NavBar translations={translations} locale={currentLocale} />
        {children}
        <Footer />
        </body>
    </html>
  );
}
