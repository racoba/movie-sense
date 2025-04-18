import { ClientNavbarWrapper } from "@/components";

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
