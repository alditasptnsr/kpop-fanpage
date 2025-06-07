import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K-Pop Fan Page - hydyyta",
  description:
    "Your ultimate destination for K-Pop content including BTS, ENHYPEN, NCT 127, NCT Dream, and TXT. Get latest news, photos, videos, and concert schedules.",
  keywords:
    "K-Pop, BTS, ENHYPEN, NCT, TXT, Korean Pop, Music, Concert, Photos, Videos",
  authors: [{ name: "K-Pop Fan Page" }],
  openGraph: {
    title: "K-Pop Fan Page",
    description: "Ultimate K-Pop destination for fans",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
