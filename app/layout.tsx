import type { Metadata } from "next";
import ModalProvider from "@/components/modals/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { hindi15 } from "@/components/lifonts/localfonts";


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
      <body className={hindi15.className}>
        <ModalProvider />
        <main>{children}</main>
        <Toaster position="top-center" className={hindi15.className} duration={5000} richColors />
      </body>
    </html>
  );
}
