import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Արո և Էլեն",
  description: "Արո և Էլեն",
  openGraph: {
    title: "Արոյի և Էլենի նշանադրության հրավիրատոմս",
    description: "Նշանադրության հրավիրատոմս",
    url: "https://aro-elen.vercel.app",
    siteName: "Արո և Էլեն",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="m-auto max-w-md text-[#000000CC] bg-white"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
