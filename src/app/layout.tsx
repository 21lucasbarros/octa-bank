import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCTA BANK",
  description:
    "Experience luxury banking with OCTA. Premium financial services for the distinguished.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
