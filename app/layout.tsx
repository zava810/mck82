import type { Metadata } from "next";
import ModalProvider from "@/components/modals/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { hindienglosoftw8asc } from "@/components/lifonts/localfonts";


export const metadata: Metadata = {
  title: "kyuizy - test your knowledge!",
  description: "a kyuiz app built usiNg nekst zs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={hindienglosoftw8asc.className}>
        <ModalProvider />
        <main>{children}</main>
        <Toaster position="top-center" className={hindienglosoftw8asc.className} duration={5000} richColors />
      </body>
    </html>
  );
}
