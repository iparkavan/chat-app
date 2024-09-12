import type { Metadata } from "next";
import "../globals.css";
import ClientProviders from "@/lib/client-providers";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
      <div className="">
        <div className="m-5 min-h-[95vh] border rounded-2xl">
          <div className="rounded-2xl w-full">{children}</div>
        </div>
      </div>
    </ClientProviders>
  );
}
