import { ClientNavbarWrapper } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieSense",
  description: "Movie recommendation",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientNavbarWrapper />
      {children}
    </>
  );
}
