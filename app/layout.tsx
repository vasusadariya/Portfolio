import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Vasu Sadariya — Fullstack Developer & Web3 Enthusiast",
  description: "Fullstack developer, Web3 builder, and open-source contributor. ECE undergrad at NIT Surat. Building at the intersection of logic and art.",
  keywords: "Vasu Sadariya, Fullstack Developer, Web3, React Developer, Three.js, Creative Developer, Web Development, Node.js, Next.js, JavaScript, TypeScript, Solidity, Blockchain, DevOps, NIT Surat, Portfolio",
  authors: [{ name: "Vasu Sadariya", url: "https://www.vasusadariya.dev/" }],
  creator: "Vasu Sadariya",
  publisher: "Vasu Sadariya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vasu Sadariya — Fullstack Developer & Web3 Enthusiast",
    description: "Fullstack developer, Web3 builder, and open-source contributor. Building at the intersection of logic and art.",
    url: "https://www.vasusadariya.dev/",
    siteName: "Vasu Sadariya — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu Sadariya — Fullstack Developer & Web3 Enthusiast",
    description: "Fullstack developer, Web3 builder, and open-source contributor. Building at the intersection of logic and art.",
  },
  verification: {
    google: "pFtOXirAoz2h-GGBqmhrdeQcQBpTRHQpLv7t6HHScxg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-1DSKDK5XDF'}/>
    </html>
  );
}
