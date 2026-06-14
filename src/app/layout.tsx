import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "BYNIXX Tech Solutions – Digital Transformation & Live-Project Training | Theni, Tamil Nadu",
  description: "BYNIXX Tech Solutions empowers SMEs with enterprise-grade ERP systems, automation tools & modern websites, while building industry-ready talent through live project execution. Based in Theni, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
