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
    "모든 이야기의 가치를 깊이 있는 공간 서사와 감각적인 연출로 증명하는 크리에이티브 디자인 스튜디오",
  openGraph: {
    title: "studio mng.",
    description: "모든 이야기의 가치를 깊이 있는 공간 서사와 감각적인 연출로 증명하는 크리에이티브 디자인 스튜디오",
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
