import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "JVR.",
  description: "Jaime V. Rodriguez",

  openGraph: {
    title: "JVR.",
    description: "Jaime V. Rodriguez",
    url: "https://www.jaime-v-rodriguez.com",
    siteName: "JVR.",
    images: [
      {
      url: "https://www.jaime-v-rodriguez.com/og-preview.png",
      width: 1200,
      height: 630,
      alt: "JVR."
      }
    ],
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
