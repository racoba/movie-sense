import { Navbar } from "@/components";
import { Metadata } from "next";

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
      <body className="min-h-[100vh]flex flex-col p-6 gap-10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
