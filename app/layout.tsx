import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "studio mng.",
  description:
    "본질을 담은 공간과 감각적인 경험을 설계하는 스튜디오",
  openGraph: {
    title: "studio mng.",
    description: "본질을 담은 공간과 감각적인 경험을 설계하는 스튜디오",
    url: "https://studiomng.com",
    siteName: "studio mng.",
    images: [
      {
        url: "https://studiomng.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
