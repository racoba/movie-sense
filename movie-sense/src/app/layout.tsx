import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieSense",
  description: "Movie recommendation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] gap-10 flex flex-col p-6">
        {children}
      </body>
    </html>
  );
}
