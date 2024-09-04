import type { Metadata } from "next";
import "../globals.css";
// import Navbar from "@/common/navbar";
// import Sidebar from "@/common/sidebar";

// const inter = Inter({ subsets: ['latin'] });

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
    <div className="">
      {/* <div className="fixed w-screen h-14 sh border-b rounded-b-2xl backdrop-blur-md px-8">
        <Navbar />
      </div> */}
      <div className="m-5 min-h-[95vh] border rounded-2xl">
        {/* <div className="w-12 shadow-sm fixed min-h-[calc(100vh-70px)] rounded-2xl">
          <Sidebar />
        </div> */}
        <div className="rounded-2xl w-full">{children}</div>
      </div>
    </div>
  );
}
